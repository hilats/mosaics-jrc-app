angular.module('mosaicsControllers').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/query.html',
    "<cell mosaics mosaic mosaic-var=\"selected\">\n" +
    "    <div style=\"display: table; height: 100%\"><row>\n" +
    "    <div class=\"slidein panel left\">\n" +
    "        <h3 class=\"header_padder\"><!-- vertical padding--></h3>\n" +
    "    <div style=\"position: absolute\">\n" +
    "        <div id=\"mosaicList\" class=\"subpanel\">\n" +
    "            <ul class=\"nav nav-tabs panel_header\">\n" +
    "                <li><h5 style=\"margin-top: 9px;margin-bottom: 0px;margin-right: 3px\">Mosaics</h5></li>\n" +
    "                <li role=\"presentation\" ui-sref-active=\"active\" ui-sref=\"mosaics.query({query: 'mine'})\"><a >Mine</a></li>\n" +
    "                <li role=\"presentation\" ui-sref-active=\"active\" ui-sref=\"mosaics.all\"><a >All</a></li>\n" +
    "                <li style=\"float: right\"><span title=\"Create a Mosaic\" class=\"action btn glyphicon glyphicon-plus\" style=\"float: right\" ng-click=\"createMosaic()\"></span></li>\n" +
    "            </ul>\n" +
    "            <div class=\"panel_content\" >\n" +
    "                <div ng-repeat=\"mosaic in mosaics\">\n" +
    "                    <!-- <span  ng-click=\"select(mosaic)\" ng-style=\"{ 'font-weight': isSelected(mosaic) ? 'bold' : '' }\">{{mosaic[\"dc:title\"] || mosaic[\"id\"]}}</span> -->\n" +
    "                    <span class=\"link\" ui-sref=\"mosaics.id(mosaic)\" ui-sref-active=\"active\">{{mosaic[\"dc:title\"] || mosaic[\"id\"]}}</span>\n" +
    "                    <span class=\"action glyphicon glyphicon-trash\" ng-click=\"deleteMosaic(mosaic)\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id=\"resourceList\" ng-if=\"selected\" class=\"subpanel\">\n" +
    "            <div class=\"panel_header\">\n" +
    "                <div class=\"dropdown\" title=\"Add a ressource\" style=\"float: right\">\n" +
    "                    <span class=\"action dropdown-toggle glyphicon glyphicon-plus\" data-toggle=\"dropdown\"></span>\n" +
    "                    <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                        <li ng-click=\"createResource(selected)\">From URL</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <h5>Resources</h5>\n" +
    "            </div>\n" +
    "            <div class=\"panel_content\" >\n" +
    "                <div ng-repeat=\"res in selected.resources\">\n" +
    "                    <div>\n" +
    "                        <span class=\"action glyphicon glyphicon-trash\" ng-click=\"deleteResource(selected, res)\"></span>\n" +
    "                        <span class=\"link\" ui-sref=\"mosaics.id.resource({id:selected.id, res:res.id})\" ui-sref-active=\"active\">{{res['dc:title']}}</span>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"selectedRes == res\" class=\"annotList\" ng-repeat=\"annot in annotationsFromMap[res['source']]\">\n" +
    "                        <span ng-click=\"gotoAnnotation(annot)\">{{annot['dc:title']}}</span>\n" +
    "                        <span class=\"action glyphicon glyphicon-trash\" ng-click=\"deleteResource(res)\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id=\"annotationsList\" ng-if=\"selectedRes\" class=\"subpanel\" ng-init=\"displayFrom = true\">\n" +
    "            <div class=\"panel_header\">\n" +
    "                <h5>Annotations\n" +
    "                    <span class=\"glyphicon glyphicon-log-out\" ng-click=\"displayFrom = true\" ng-style=\"displayFrom?undefined:{opacity:0.7}\"></span>\n" +
    "                    <span class=\"glyphicon glyphicon-log-in\" ng-click=\"displayFrom = false\" ng-style=\"!displayFrom?undefined:{opacity:0.7}\"></span>\n" +
    "                </h5>\n" +
    "            </div>\n" +
    "            <!--\n" +
    "            <span ng-click=\"createAnnotation()\">New Annotation</span>\n" +
    "            -->\n" +
    "\n" +
    "            <div class=\"panel_content\" >\n" +
    "                    <div ng-repeat=\"annot in (displayFrom?annotationsFromMap:annotationsToMap)[selectedRes['source']]\">\n" +
    "                    <span ng-click=\"gotoAnnotation(annot)\">{{annot['dc:title']}}</span>\n" +
    "                    <span class=\"action glyphicon glyphicon-trash\" ng-click=\"deleteResource(res)\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--\n" +
    "    <mosaic-viewer ng-mosaic=\"selected\" ng-res=\"selectedRes\" ng-if=\"selected\"/>\n" +
    "    -->\n" +
    "    <div class=\"panel\">\n" +
    "    <div ng-show=\"selected\" style=\"padding: 0px 10px\" ng-init=\"layout = 'right'\" ng-class=\"'layout-'+layout\">\n" +
    "        <h3>\n" +
    "            <span editable ng-model=\"selected['dc:title']\"></span>\n" +
    "            <span ng-if=\"selectedRes\">\n" +
    "                / <span editable ng-model=\"selectedRes['dc:title']\"></span>\n" +
    "            </span>\n" +
    "            <div style=\"float:right;\">\n" +
    "                <div class=\"btn-group\" style=\"vertical-align: text-top\" >\n" +
    "                    <span class=\"action dropdown-toggle\" ng-class=\"{i_right_panel: layout == 'right', i_layout_design: layout == 'bottom', i_four_grid: layout == 'grid'}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                    </span>\n" +
    "                    <div class=\"dropdown-menu\" style=\"font-size: inherit; min-width: 0; position: absolute; z-index: 1000; border: none; padding: 2px; left: -2px\">\n" +
    "                        <div class=\"action i_right_panel dropdown-item\" ng-click=\"layout = 'right'\"></div>\n" +
    "                        <div class=\"action i_layout_design dropdown-item\" ng-click=\"layout = 'bottom'\"></div>\n" +
    "                        <div class=\"action i_four_grid dropdown-item\" ng-click=\"layout = 'grid'\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span ng-if=\"selectedRes\">\n" +
    "                    <a title=\"Open original resource\" class=\"action glyphicon glyphicon-share\" ng-href=\"selectedRes['source']\"></a> |\n" +
    "                </span>\n" +
    "                <span title=\"Edit mosaic\" class=\"action glyphicon glyphicon-edit\" ng-click=\"toggleEdit()\"></span>\n" +
    "                <span ng-show=\"selected.$dirty\" class=\"action glyphicon glyphicon-floppy-save\" ng-click=\"saveMosaic(selected)\"></span>\n" +
    "            </div>\n" +
    "        </h3>\n" +
    "        <div class=\"flipContainer\" ng-class=\"{showBack: editMode}\">\n" +
    "            <div class=\"flipper\">\n" +
    "                <div class=\"mosaicEditor back\">\n" +
    "                    <ui-codemirror id=\"mosaicEditor\" ui-codemirror-opts=\"editorOptions\" ng-model=\"jsonMosaic\"></ui-codemirror>\n" +
    "                </div>\n" +
    "                <div class=\"mosaicDisplay front\" mosaic-display ng-res=\"selectedRes\" annotations-from-map=\"annotationsFromMap\" annotations-to-map=\"annotationsToMap\">\n" +
    "                    <div class=\"mainResource\">\n" +
    "                        <div style=\"display:inline-block; position:absolute; z-index: 100\" ng-if=\"loading\" class=\"loader\">Loading</div>\n" +
    "                        <div id=\"theContainer\" style=\"height: 100%\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"linkedResources\" ng-show=\"$root.keys(displayedAnnotationResources).length > 0\">\n" +
    "                        <div class=\"annotResContainer\" ng-repeat=\"(hash, ann) in displayedAnnotationResources\">\n" +
    "                            <div resource-display class=\"annotResViewer\" ng-res=\"ann\" close-viewer-fn=\"closeAnnotationResource\">\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    </row></div>\n" +
    "</cell>"
  );


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