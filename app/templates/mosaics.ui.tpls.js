angular.module('mosaicsControllers').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/doc.html',
    "<div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/sparql.html',
    "<div >\n" +
    "\n" +
    "    <div style=\"position:relative\">\n" +
    "        <div style=\"float:right; margin-right:1em; margin-top: 1em\">\n" +
    "            <div class=\"btn-group\" style=\"margin-bottom: 10px; width: 100%\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\">Sample queries</button>\n" +
    "                <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                    <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "                </button>\n" +
    "                <ul class=\"dropdown-menu\" style=\"right: 0; left: inherit\">\n" +
    "                    <li ng-repeat=\"(label,url) in sampleQueries\"><a ng-click=\"loadQuery(url)\">{{label}}</a></li>\n" +
    "                </ul>\n" +
    "            </div><br/>\n" +
    "            <button class=\"btn btn-primary\" style=\"margin-bottom: 10px; width: 100%\" ng-click=\"sendQuery()\">query</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <ui-codemirror id=\"sparqlEditor\" ui-codemirror-opts=\"editorOptions\" ng-model=\"query\"></ui-codemirror>\n" +
    "    </div>\n" +
    "\n" +
    "    <div style=\"position:relative\">\n" +
    "        <div class=\"btn-group\" style=\"position:absolute; right:1em; top: 1em; z-index: 3\">\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"format\" uib-btn-radio=\"'rdf'\">RDF</label>\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"format\" uib-btn-radio=\"'ttl'\">Turtle</label>\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"format\" uib-btn-radio=\"'jsonld'\">JSON-LD</label>\n" +
    "        </div>\n" +
    "        <ui-codemirror id=\"resultEditor\" ui-codemirror-opts=\"editorOptions\" ng-model=\"result\"></ui-codemirror>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
