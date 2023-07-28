import { useContext, useEffect, useRef, useState } from "react";
import { NetlifyIndentify, authContext } from ".";

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    return {
      isLoggedIn: false,
      currentUser: () => ({
        token: {
          access_token: "",
        },
        email: "",
        user_metadata: {
          full_name: "",
        },
      }),
      login: () => null,
      logout: () => null,
      open: () => null,
    };
  }
  return context;
}
