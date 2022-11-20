# Inflexible Requirements #1

## Both the Container + Individual SubApps need routing features

### Users can navigate around to different subapps using routing logic built into the Container

### Users can navigate around in a subapp using routing logic built into the subapp itself

### Not all subapps will require routing

# Inflexible Requirements #2

## Sub-apps might need to add in new pages/routes all the time

### New routes added to a subapp should't require a redeploy of the container!

# Inflexible Requirements #3

## We might need to show two or more micronfrontends at the same time

### This will occur all the time if we have some kind of sidebar nav that is built as a separate microfrontend

# Inflexible Requirements #4

## We want to use off-the-shelf routing solutions

### Building a routing library can be hard - we don't want to author a new one!

### Some amount of custom coding is OK

# Inflexible Requirements #5

## We need navigation features for sub-apps in both hosted mode and in isolation

### Developing for each environment should be easy - a developer should immediately be able to see what path the are visiting

# Inflexible Requirements #6

## If different apps need to communicate information about routing, it should be done is as generic a fashion as possible

### Each app might be using a complete different navigation framework

### We might swap out or upgrade navigation libraries all the time - should't require a rewrite of the rest of app
