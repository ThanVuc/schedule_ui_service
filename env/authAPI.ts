

const base = process.env.NEXT_PUBLIC_API_AUTH;

const authAPI = {
  login: `${base}/login`,
  logout: `${base}/logout`,
  register: `${base}/register`,
  refresh: `${base}/refresh`,
  verify: `${base}/verify`,
 
};

export default authAPI;
