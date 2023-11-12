module.exports = {
    routes: [
        {
            "method": "PATCH",
             "path": "/news/:id/view",
             "handler": "news.logViewCount"
       },

    ]
  }