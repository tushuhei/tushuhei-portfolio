import webapp2

class MainHandler(webapp2.RequestHandler):
  def get(self, filename):
    self.redirect('/static/rsc/' + filename)

app = webapp2.WSGIApplication([
    ('/rsc/(.*)', MainHandler)
], debug=True)
