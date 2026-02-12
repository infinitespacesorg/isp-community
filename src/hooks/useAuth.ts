// Placeholder auth hook — will be replaced with @infinitespaces/auth (ADR-008)

export function useAuth() {
  return {
    user: null as { name?: string; email?: string } | null,
    isPending: false,
    isAnonymous: true,
    login: () => {
      // Will redirect to Fabric Console OIDC login
      console.log("Auth not yet configured — will use @infinitespaces/auth");
    },
    logout: () => {
      console.log("Auth not yet configured");
    },
  };
}
