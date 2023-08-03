var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limitemunicipal_1 = new ol.format.GeoJSON();
var features_Limitemunicipal_1 = format_Limitemunicipal_1.readFeatures(json_Limitemunicipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemunicipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_1.addFeatures(features_Limitemunicipal_1);
var lyr_Limitemunicipal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitemunicipal_1, 
                style: style_Limitemunicipal_1,
                interactive: true,
                title: '<img src="styles/legend/Limitemunicipal_1.png" /> Limite municipal'
            });
var format_Municipios_trabajo_2 = new ol.format.GeoJSON();
var features_Municipios_trabajo_2 = format_Municipios_trabajo_2.readFeatures(json_Municipios_trabajo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_trabajo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_trabajo_2.addFeatures(features_Municipios_trabajo_2);
var lyr_Municipios_trabajo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_trabajo_2, 
                style: style_Municipios_trabajo_2,
                interactive: true,
    title: 'Municipios_trabajo<br />\
    <img src="styles/legend/Municipios_trabajo_2_0.png" /> Amazonia<br />\
    <img src="styles/legend/Municipios_trabajo_2_1.png" /> Chaco<br />\
    <img src="styles/legend/Municipios_trabajo_2_2.png" /> Charagua Chiquitania 2<br />\
    <img src="styles/legend/Municipios_trabajo_2_3.png" /> Chiquitania 1<br />\
    <img src="styles/legend/Municipios_trabajo_2_4.png" /> Valles<br />\
    <img src="styles/legend/Municipios_trabajo_2_5.png" /> Valles sur<br />\
    <img src="styles/legend/Municipios_trabajo_2_6.png" /> Yungas<br />'
        });
var format_Fondo_de_agua_3 = new ol.format.GeoJSON();
var features_Fondo_de_agua_3 = format_Fondo_de_agua_3.readFeatures(json_Fondo_de_agua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fondo_de_agua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fondo_de_agua_3.addFeatures(features_Fondo_de_agua_3);
var lyr_Fondo_de_agua_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fondo_de_agua_3, 
                style: style_Fondo_de_agua_3,
                interactive: true,
    title: 'Fondo_de_agua<br />\
    <img src="styles/legend/Fondo_de_agua_3_0.png" /> Fondo grande<br />\
    <img src="styles/legend/Fondo_de_agua_3_1.png" /> Fondo mediano<br />\
    <img src="styles/legend/Fondo_de_agua_3_2.png" /> Fondo pequeño<br />'
        });
var format_AreasprotegidasdesarrolladasporFNB_4 = new ol.format.GeoJSON();
var features_AreasprotegidasdesarrolladasporFNB_4 = format_AreasprotegidasdesarrolladasporFNB_4.readFeatures(json_AreasprotegidasdesarrolladasporFNB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasprotegidasdesarrolladasporFNB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasprotegidasdesarrolladasporFNB_4.addFeatures(features_AreasprotegidasdesarrolladasporFNB_4);
var lyr_AreasprotegidasdesarrolladasporFNB_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreasprotegidasdesarrolladasporFNB_4, 
                style: style_AreasprotegidasdesarrolladasporFNB_4,
                interactive: true,
                title: '<img src="styles/legend/AreasprotegidasdesarrolladasporFNB_4.png" /> Areas protegidas desarrolladas por FNB'
            });
var format_AcuerdosRecprocosporelAgua_5 = new ol.format.GeoJSON();
var features_AcuerdosRecprocosporelAgua_5 = format_AcuerdosRecprocosporelAgua_5.readFeatures(json_AcuerdosRecprocosporelAgua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcuerdosRecprocosporelAgua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcuerdosRecprocosporelAgua_5.addFeatures(features_AcuerdosRecprocosporelAgua_5);
var lyr_AcuerdosRecprocosporelAgua_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcuerdosRecprocosporelAgua_5, 
                style: style_AcuerdosRecprocosporelAgua_5,
                interactive: true,
                title: '<img src="styles/legend/AcuerdosRecprocosporelAgua_5.png" /> Acuerdos Recíprocos por el Agua'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitemunicipal_1.setVisible(true);lyr_Municipios_trabajo_2.setVisible(true);lyr_Fondo_de_agua_3.setVisible(true);lyr_AreasprotegidasdesarrolladasporFNB_4.setVisible(true);lyr_AcuerdosRecprocosporelAgua_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitemunicipal_1,lyr_Municipios_trabajo_2,lyr_Fondo_de_agua_3,lyr_AreasprotegidasdesarrolladasporFNB_4,lyr_AcuerdosRecprocosporelAgua_5];
lyr_Limitemunicipal_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NUEVOS_MUN': 'NUEVOS_MUN', 'CODIGO': 'CODIGO', 'COD_DEP': 'COD_DEP', 'NOM_DEP': 'NOM_DEP', 'COD_PROV': 'COD_PROV', 'NOM_PROV': 'NOM_PROV', 'COD_MUN': 'COD_MUN', 'CAT_SEC': 'CAT_SEC', 'NOM_MUN': 'NOM_MUN', 'CANTONES': 'CANTONES', 'POBLACION': 'POBLACION', 'ASIG_POB': 'ASIG_POB', 'COD1_SECC': 'COD1_SECC', 'Superf_km2': 'Superf_km2', 'Superf_m2': 'Superf_m2', 'CONFLICTO': 'CONFLICTO', 'UBICACION': 'UBICACION', 'TRAMITE': 'TRAMITE', 'HA': 'HA', 'QUERY': 'QUERY', 'aREA': 'aREA', });
lyr_Municipios_trabajo_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ID': 'ID', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'CAPITAL': 'CAPITAL', 'Region': 'Region', 'Region2': 'Region2', });
lyr_Fondo_de_agua_3.set('fieldAliases', {'Id': 'Id', 'Clase': 'Clase', 'Nombre': 'Nombre', 'Año': 'Año', });
lyr_AreasprotegidasdesarrolladasporFNB_4.set('fieldAliases', {'NOMBRE_12': 'NOMBRE_12', 'REGION': 'REGION', 'NOMBRE_COR': 'NOMBRE_COR', 'DESIGNACIO': 'DESIGNACIO', 'DESIG_INGL': 'DESIG_INGL', 'ESCALA': 'ESCALA', 'IUCN_CAT': 'IUCN_CAT', 'ANHO': 'ANHO', 'FUENTE_1': 'FUENTE_1', 'SUPERFICIE': 'SUPERFICIE', 'SUP_KM2': 'SUP_KM2', 'APOY_FUNAT': 'APOY_FUNAT', 'ESTADO': 'ESTADO', 'VISIBLE': 'VISIBLE', 'OBJ_CREAC': 'OBJ_CREAC', 'COMUNIDADE': 'COMUNIDADE', 'PROP_PRIV': 'PROP_PRIV', 'LEY_CREACI': 'LEY_CREACI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMEN': 'DEPARTAMEN', 'ZONA_UTM': 'ZONA_UTM', });
lyr_AcuerdosRecprocosporelAgua_5.set('fieldAliases', {'Dueño_': 'Dueño_', 'Comunidad_': 'Comunidad_', 'Municipio_': 'Municipio_', 'Departamen': 'Departamen', 'Region_': 'Region_', 'Año_': 'Año_', 'Superficie': 'Superficie', 'Acuerdo': 'Acuerdo', 'Firma_': 'Firma_', 'ARA': 'ARA', 'ID_SIG_': 'ID_SIG_', });
lyr_Limitemunicipal_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'Range', 'NUEVOS_MUN': 'TextEdit', 'CODIGO': 'TextEdit', 'COD_DEP': 'TextEdit', 'NOM_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'NOM_PROV': 'TextEdit', 'COD_MUN': 'TextEdit', 'CAT_SEC': 'TextEdit', 'NOM_MUN': 'TextEdit', 'CANTONES': 'TextEdit', 'POBLACION': 'TextEdit', 'ASIG_POB': 'TextEdit', 'COD1_SECC': 'TextEdit', 'Superf_km2': 'TextEdit', 'Superf_m2': 'TextEdit', 'CONFLICTO': 'Range', 'UBICACION': 'TextEdit', 'TRAMITE': 'TextEdit', 'HA': 'TextEdit', 'QUERY': 'TextEdit', 'aREA': 'TextEdit', });
lyr_Municipios_trabajo_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ID': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CAPITAL': 'TextEdit', 'Region': 'TextEdit', 'Region2': 'TextEdit', });
lyr_Fondo_de_agua_3.set('fieldImages', {'Id': 'Range', 'Clase': 'TextEdit', 'Nombre': 'TextEdit', 'Año': 'TextEdit', });
lyr_AreasprotegidasdesarrolladasporFNB_4.set('fieldImages', {'NOMBRE_12': 'TextEdit', 'REGION': 'TextEdit', 'NOMBRE_COR': 'TextEdit', 'DESIGNACIO': 'TextEdit', 'DESIG_INGL': 'TextEdit', 'ESCALA': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'ANHO': 'TextEdit', 'FUENTE_1': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_KM2': 'TextEdit', 'APOY_FUNAT': 'TextEdit', 'ESTADO': 'TextEdit', 'VISIBLE': 'TextEdit', 'OBJ_CREAC': 'TextEdit', 'COMUNIDADE': 'TextEdit', 'PROP_PRIV': 'TextEdit', 'LEY_CREACI': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'ZONA_UTM': 'TextEdit', });
lyr_AcuerdosRecprocosporelAgua_5.set('fieldImages', {'Dueño_': 'TextEdit', 'Comunidad_': 'TextEdit', 'Municipio_': 'TextEdit', 'Departamen': 'TextEdit', 'Region_': 'TextEdit', 'Año_': 'TextEdit', 'Superficie': 'TextEdit', 'Acuerdo': 'TextEdit', 'Firma_': 'DateTime', 'ARA': 'TextEdit', 'ID_SIG_': 'TextEdit', });
lyr_Limitemunicipal_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NUEVOS_MUN': 'no label', 'CODIGO': 'no label', 'COD_DEP': 'no label', 'NOM_DEP': 'no label', 'COD_PROV': 'no label', 'NOM_PROV': 'no label', 'COD_MUN': 'no label', 'CAT_SEC': 'no label', 'NOM_MUN': 'no label', 'CANTONES': 'no label', 'POBLACION': 'no label', 'ASIG_POB': 'no label', 'COD1_SECC': 'no label', 'Superf_km2': 'no label', 'Superf_m2': 'no label', 'CONFLICTO': 'no label', 'UBICACION': 'no label', 'TRAMITE': 'no label', 'HA': 'no label', 'QUERY': 'no label', 'aREA': 'no label', });
lyr_Municipios_trabajo_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'ID': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'MUNICIPIO': 'no label', 'CAPITAL': 'no label', 'Region': 'no label', 'Region2': 'no label', });
lyr_Fondo_de_agua_3.set('fieldLabels', {'Id': 'no label', 'Clase': 'no label', 'Nombre': 'no label', 'Año': 'no label', });
lyr_AreasprotegidasdesarrolladasporFNB_4.set('fieldLabels', {'NOMBRE_12': 'no label', 'REGION': 'no label', 'NOMBRE_COR': 'no label', 'DESIGNACIO': 'no label', 'DESIG_INGL': 'no label', 'ESCALA': 'no label', 'IUCN_CAT': 'no label', 'ANHO': 'no label', 'FUENTE_1': 'no label', 'SUPERFICIE': 'no label', 'SUP_KM2': 'no label', 'APOY_FUNAT': 'no label', 'ESTADO': 'no label', 'VISIBLE': 'no label', 'OBJ_CREAC': 'no label', 'COMUNIDADE': 'no label', 'PROP_PRIV': 'no label', 'LEY_CREACI': 'no label', 'MUNICIPIO': 'no label', 'DEPARTAMEN': 'no label', 'ZONA_UTM': 'no label', });
lyr_AcuerdosRecprocosporelAgua_5.set('fieldLabels', {'Dueño_': 'no label', 'Comunidad_': 'no label', 'Municipio_': 'no label', 'Departamen': 'no label', 'Region_': 'no label', 'Año_': 'no label', 'Superficie': 'no label', 'Acuerdo': 'no label', 'Firma_': 'no label', 'ARA': 'no label', 'ID_SIG_': 'no label', });
lyr_AcuerdosRecprocosporelAgua_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});