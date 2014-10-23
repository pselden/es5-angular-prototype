Event Shopper Exercise Shell
=============================

This project provides an empty shell for evaluating a MVC framework for the
future EventShopper application.

The project enforces a "modular" structure.

::

  eventshopper/
  ├── app.js
  ├── cart
  ├── checkout
  ├── confirmation
  ├── eventcalendar
  ├── eventlist
  ├── sectionmap
  └── venuemap

Application Flow
-----------------

The application will be loaded with a issCode in a URL parameter.

The first page will present the following vews: EventList, VenuMap, SectionMap
and Cart. The url will contain a `issCode` and `lang` parameters.

You can develop agains the DEM system where we have a issCode
"DEMRoyalMarsdenupselltest" set up with section views.


::

  Page 1) Event and ticket selection
  +------------+ +------------+
  |1)          | |2)          |
  |            | |            |
  |  EventList | |  VenueMap  |
  |            | |            |
  |            | |            |
  +------------+ +------------+
  
  +------------+ +------------+
  |3)          | |4)          |
  |            | |            |
  | SectionMap | |   Cart     |
  |            | |            |
  |            | |            |
  +------------+ +------------+





Requirements
---------------

The application must:

  - Include unit tests.
  - Be translatable (i18n) (Include translations for French).

Unit Tests
------------

The evaluator must provide the unit tests for his application.




I18n
-----------------
