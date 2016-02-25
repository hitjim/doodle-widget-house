# house-finder

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

### Service completed
* locationService - haven't set up retries or anything.  Upon failure, location becomes Earth, MW.  Uses http://ip-api.com/docs/api:json

### No styling yet.  Did get FontAwesome working.

### Project structure is not my ideal, but quick enough to get started.

### Directives planned
* Tile - houses other directives, contains main controller "HouseFinderCtrl" - started, already uses service to display location based on client IP
  * Banner (required) - optional header b/g, optional message text
  * Header (optional) - black bar at top with additional message
* Selection Row
  * optional header
  * data: class and string for ng-bind-html
  * checkboxes array
    * data: label, icon, id
    * 2-way bound selected ids array
  * dropdowns array
    * data: label, id, choices array
      * 2-way bound selected id array
* Footer - optional buttons array, each with label and commit function
* Range Selector
  * header
  * filter type (dollars)
  * rangeMin, rangeMax
  * 2-way bound selectMin, selectMax, average
