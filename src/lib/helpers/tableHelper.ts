import {keys} from '@mantine/utils';
import {TableRowData} from 'models/ui';

export const filterData = (data: TableRowData[], search: string) => {
  const query = search.toLowerCase().trim();
  return data.filter(item =>
    keys(data[0]).some(key =>
      item[key] ? item[key]!.toString().toLowerCase().includes(query) : false
    )
  );
};

export const sortData = (
  data: TableRowData[],
  payload: {
    sortBy: keyof TableRowData | null;
    reversed: boolean;
    search: string;
  }
) => {
  const {sortBy} = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  const sortByString = (a: TableRowData, b: TableRowData) => {
    if (payload.reversed) {
      return b[sortBy]!.toString().localeCompare(a[sortBy]!.toString());
    }

    return a[sortBy]!.toString().localeCompare(b[sortBy]!.toString());
  };

  const sortByNumber = (a: TableRowData, b: TableRowData) => {
    const firstNumber = parseInt(a[sortBy].toString());
    const secondNumber = parseInt(b[sortBy].toString());

    if (payload.reversed) return secondNumber - firstNumber;

    return firstNumber - secondNumber;
  };

  return filterData(
    [...data].sort((a, b) => {
      const isNumberType = typeof a[sortBy] === 'number';

      if (!a[sortBy] || !b[sortBy]) return 0;

      if (!isNumberType) {
        return sortByString(a, b);
      }

      return sortByNumber(a, b);
    }),
    payload.search
  );
};
