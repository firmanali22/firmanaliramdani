var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_DataSapi_1 = new ol.format.GeoJSON();
var features_DataSapi_1 = format_DataSapi_1.readFeatures(json_DataSapi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataSapi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DataSapi_1.addFeatures(features_DataSapi_1);var lyr_DataSapi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DataSapi_1, 
                style: style_DataSapi_1,
    title: 'DataSapi<br />\
    <img src="styles/legend/DataSapi_1_0.png" />  1737 - 5485 <br />\
    <img src="styles/legend/DataSapi_1_1.png" />  5485 - 9232 <br />\
    <img src="styles/legend/DataSapi_1_2.png" />  9232 - 12980 <br />'
        });var format_DataKambing_2 = new ol.format.GeoJSON();
var features_DataKambing_2 = format_DataKambing_2.readFeatures(json_DataKambing_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataKambing_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DataKambing_2.addFeatures(features_DataKambing_2);var lyr_DataKambing_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DataKambing_2, 
                style: style_DataKambing_2,
    title: 'DataKambing<br />\
    <img src="styles/legend/DataKambing_2_0.png" />  2229 - 18538 <br />\
    <img src="styles/legend/DataKambing_2_1.png" />  18538 - 34847 <br />\
    <img src="styles/legend/DataKambing_2_2.png" />  34847 - 51156 <br />'
        });var format_DataAYAM_3 = new ol.format.GeoJSON();
var features_DataAYAM_3 = format_DataAYAM_3.readFeatures(json_DataAYAM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataAYAM_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DataAYAM_3.addFeatures(features_DataAYAM_3);var lyr_DataAYAM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DataAYAM_3, 
                style: style_DataAYAM_3,
    title: 'DataAYAM<br />\
    <img src="styles/legend/DataAYAM_3_0.png" />  3736.0000 - 69419.3333 <br />\
    <img src="styles/legend/DataAYAM_3_1.png" />  69419.3333 - 135102.6667 <br />\
    <img src="styles/legend/DataAYAM_3_2.png" />  135102.6667 - 200786.0000 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_DataSapi_1.setVisible(true);lyr_DataKambing_2.setVisible(true);lyr_DataAYAM_3.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_DataSapi_1,lyr_DataKambing_2,lyr_DataAYAM_3];
lyr_DataSapi_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'SAPI PTG': 'SAPI PTG', });
lyr_DataKambing_2.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'KAMBING': 'KAMBING', });
lyr_DataAYAM_3.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'AYAM': 'AYAM', });
lyr_DataSapi_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'SAPI PTG': 'TextEdit', });
lyr_DataKambing_2.set('fieldImages', {'Kecamatan': 'TextEdit', 'KAMBING': 'TextEdit', });
lyr_DataAYAM_3.set('fieldImages', {'Kecamatan': 'TextEdit', 'AYAM': 'TextEdit', });
lyr_DataSapi_1.set('fieldLabels', {'Kecamatan': 'inline label', 'SAPI PTG': 'inline label', });
lyr_DataKambing_2.set('fieldLabels', {'Kecamatan': 'inline label', 'KAMBING': 'inline label', });
lyr_DataAYAM_3.set('fieldLabels', {'Kecamatan': 'inline label', 'AYAM': 'inline label', });
lyr_DataAYAM_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});