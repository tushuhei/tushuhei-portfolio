from jinja2 import Markup, contextfilter
from jinja2.ext import Extension
import budou

budou_parser = budou.authenticate('budou-cloud.json')

@contextfilter
def do_budou(context, value):
  doc = context.get('doc')
  if doc.locale == 'ja':
    data = budou_parser.parse(value)
    return Markup(data['html_code'])
  else:
    return value

class Wordwrap(Extension):

  def __init__(self, environment):
    super(Wordwrap, self).__init__(environment)
    environment.filters['budou'] = do_budou
