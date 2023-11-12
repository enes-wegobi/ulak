module.exports = ({ env }) => ({

    seo: {
      enabled: false,
    },
    "rest-cache": {
        config: {
          provider: {
            name: "memory",
            options: {
              max: 32767,
              maxAge: 3600,
            },
          },
          strategy: {
            contentTypes: [         
                 
            {
                contentType: "api::category.category",
                routes:  [
                  {
                    path: 'api/categories', 
                    method: 'GET', 
                  },
                ],
              },

            ],
            debug: true,
          },
        },
      },
  });