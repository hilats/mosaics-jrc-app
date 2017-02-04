angular.module('mosaicsControllers').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/sparql.html',
    "<div >\n" +
    "\n" +
    "    <div style=\"position:relative\">\n" +
    "    <button class=\"btn btn-primary\" style=\"float:right; margin-right:1em; margin-top: 1em\" ng-click=\"sendQuery()\">query</button>\n" +
    "    <ui-codemirror id=\"sparqlEditor\" ui-codemirror-opts=\"editorOptions\" ng-model=\"query\"></ui-codemirror>\n" +
    "    </div>\n" +
    "\n" +
    "    <div style=\"position:relative\">\n" +
    "        <div class=\"btn-group\" style=\"position:absolute; right:1em; top: 1em; z-index: 3\">\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"format\" btn-radio=\"'rdf'\">RDF</label>\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"format\" btn-radio=\"'ttl'\">Turtle</label>\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"format\" btn-radio=\"'jsonld'\">JSON-LD</label>\n" +
    "        </div>\n" +
    "        <ui-codemirror id=\"resultEditor\" ui-codemirror-opts=\"editorOptions\" ng-model=\"result\"></ui-codemirror>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
