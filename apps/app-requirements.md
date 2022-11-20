# Inflexible Requirements #1

## Zero coupling between child projects

### No importing of functions/objects/etc

### No shared state

### Shared libraries through Module Federation is ok

# Inflexible Requirements #2

## Near-zero coupling between container and child apps

### Container shouldn't assume that a child is using a particular framework

### Any necessary communication done with callbacks or simple events

# Inflexible Requirements #3

## CSS from one project shouldn't affect another

# Inflexible Requirements #4

## Version control (monorepo vs separate) shouldn't have any impact on the overall project

### Some people want to use monorepos

### Some people want keep everything in a separate repo

# Inflexible Requirements #5

## Container should be able to decide to always use the latest version of a microfrontend or specify a specific version

### Container will always use the latest version of a child app (doesn't require a redeploy of container)

### Container can specify exactly what version of a child it wants to use (requires a redeploy to change)
