# slickissue
Reproducible environment of bug

This project demonstrates how to wrap an ES6 module inside a web component.
There is a "core" file in addition to a "component" one, because the Javascript unit test tools currently do not support web component APIs.
So, by moving most of the logic into a "core" file, it is much easier to write unit tests.

Instructions:
# clone this project
git clone https://github.com/subtext916/slickissue.git

# install dependencies
npm install

# test with a http-server
(if you don't have it, use npm install http-server)
http-server
