export const getRefreshToken = (res: any): void => {
  let refreshTokenTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async (): Promise<void> => {
    const newAuthenticationRes = await res.reloadAuthResponse();

    refreshTokenTime = (newAuthenticationRes || 3600 - 5 * 60) * 1000;

    console.log(newAuthenticationRes);

    setTimeout(refreshToken, refreshTokenTime);
  };

  setTimeout(refreshToken, refreshTokenTime);
};
