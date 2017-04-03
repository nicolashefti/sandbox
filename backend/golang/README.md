---
permalink: /backend/go
---

# Golang starter kit


Golang Docker playground with a basic application.

## Build & run

```bash
# In the ./backend/goland folder
docker build -t my-golang-app .
docker run -it --rm --name my-running-app my-golang-app
```

## Resources

### Educational

- [Your first Tutorial](https://tour.golang.org/welcome/1)
- [Go - Newsletter](http://golangweekly.com/)
- [Common Mistakes or "50 shades of Go"](http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/)
- [Go Traps](http://go-traps.appspot.com/)
- [Go by example](https://gobyexample.com/)
- [The Go Playground](http://play.golang.org/)
- [Go Talks](https://talks.golang.org/)
- [Map Reduce, munching through big data](https://appliedgo.net/mapreduce/?utm_source=golangweekly&utm_medium=email)
- [Good to know](http://golang.rakyll.org/go-tool-flags/?utm_source=golangweekly&utm_medium=email)

### Performance

- [How to write Benchmarks](http://dave.cheney.net/2013/06/30/how-to-write-benchmarks-in-go)
- Analyse Memory / CPU using Profiling, 
    - [http://stackoverflow.com/questions/24863164/how-to-analyse-golang-memory](http://stackoverflow.com/questions/24863164/how-to-analyse-golang-memory)
    - [https://software.intel.com/en-us/blogs/2014/05/10/debugging-performance-issues-in-go-programs](https://software.intel.com/en-us/blogs/2014/05/10/debugging-performance-issues-in-go-programs)
- [You, Latency and Profiling](https://speakerdeck.com/filosottile/you-latency-and-profiling-at-gophercon-india-2017?utm_source=golangweekly&utm_medium=email)

 
### Projects / Experiments / Blogs

- [Go-geofence](https://eng.uber.com/go-geofence/)
- [Go Micro service](http://nicholasjackson.github.io/microservices/go/building-and-testing-microservices-part1/)
- [Visualizing Concurrency in Go](https://divan.github.io/posts/go_concurrency_visualize/)
