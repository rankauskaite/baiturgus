export const isAdminOrHasAccessToImagesValidator = async (req: any): Promise<boolean | { [key: string]: any }> => {
    const user = req.user;
  
    if (!user) return false;
    if (user.role === "admin") return true;
  
    return {
      user: {
        equals: req.user.id,
      },
    };
  };
