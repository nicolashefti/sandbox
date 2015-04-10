
utils = require('utils')
casper = require('casper').create
  verbose: true,

# To calculate load time
start = 0
end = 0
iterations = casper.cli.get('it') | 10
loadTimes = []
domElements = []
page = casper.cli.get('page')

casper.on 'page.resource.requested', (requestData, request) ->
  start = new Date().getTime()

casper.on 'page.resource.received', (response) ->
  end = new Date().getTime()
  loadTime = end - start
  loadTimes.push loadTime
  @echo "Page load time #{loadTime}ms"

unless page
  casper.log('Please provide page parameter: --page=www.pagetotest.com', 'error')
  casper.exit()
else
  page = 'http://' + page

casper.start()

casper.then ->
  for i in [1..iterations]
    @thenOpen page, ->
      domElements.push @evaluate ->
        document.getElementsByTagName('*').length

casper.then ->
  averageTime = Math.round (loadTimes.reduce (x, y) -> x + y) / iterations
  averageElements = Math.round (domElements.reduce (x, y) -> x + y) / iterations

  casper.echo "--> Average load time: #{averageTime}ms | Average DOM elements: #{averageElements}"

casper.run()



