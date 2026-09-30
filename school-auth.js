window.SCHOOL_AUTH = {

  supabaseUrl:
    "https://uwcwtjausoarpebkffty.supabase.co",

  supabaseKey:
    "sb_publishable_EJAZH3Q9BnWhvy3b6zaxVw_k6yKowS3",

  async login(email, password) {

    const response = await fetch(
      this.supabaseUrl +
      "/auth/v1/token?grant_type=password",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "apikey": this.supabaseKey
        },

        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error_description ||
        data.message ||
        "Ошибка входа"
      );
    }

    return data;
  }

};
