import React, {useEffect} from 'react';

interface GoogleLoginButtonProps {
  className: string;
  onCallbackResponse: (response: ApprovedAny) => void;
}

export const GoogleLoginButton = ({
  className,
  onCallbackResponse,
}: GoogleLoginButtonProps) => {
  const clientId =
    '1090992123059-dts3p5cf117rq6mqlkbitupdbfssrnd7.apps.googleusercontent.com';

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: clientId,
      callback: onCallbackResponse,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'medium',
      text: 'signin_with',
      shape: 'pill',
    });
  }, []);

  return <div id="signInDiv" className={className} />;
};
