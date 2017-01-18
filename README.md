# scribal

> Test Specification Display Generator

[![npm version](https://badge.fury.io/js/scribal.svg)](https://badge.fury.io/js/scribal)
[![Build Status](https://travis-ci.org/jeffnyman/scribal.svg?branch=master)](https://travis-ci.org/jeffnyman/scribal)
[![Dependency Status](https://david-dm.org/jeffnyman/scribal.svg)](https://david-dm.org/jeffnyman/scribal)

The goal of Scribal is to help create a readable representation of a test specification repository. Currently that repository must be based on Gherkin. This means you have to provide Scribal with a repository that contains feature files that are consistent with the Gherkin API.

This code is based on a similar tool called [FeatureBook](https://github.com/SOFTWARE-CLINIC/featurebook). One of my concerns with FeatureBook is that it was not adhering to Gherkin 4.x, which is the latest evolution of Gherkin. So I have updated it accordingly as well as a few other updates, such as moving from Jade (now deprecated) to Pug. I also ultimately want to support more than just Gherkin format as well as have the code that sits behind Gherkin explorable as well.
