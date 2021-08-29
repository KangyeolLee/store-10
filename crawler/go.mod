module main

go 1.15


replace main.com/common => ./common

require (
	main.com/common v0.0.0
	github.com/PuerkitoBio/goquery v1.7.1
)