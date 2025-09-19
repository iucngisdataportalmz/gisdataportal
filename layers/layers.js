ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([28.248652, -27.951911, 44.971037, -19.102215]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provinces_1 = new ol.format.GeoJSON();
var features_Provinces_1 = format_Provinces_1.readFeatures(json_Provinces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Provinces_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinces_1.addFeatures(features_Provinces_1);
var lyr_Provinces_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinces_1, 
                style: style_Provinces_1,
                popuplayertitle: 'Provinces',
                interactive: true,
                title: '<img src="styles/legend/Provinces_1.png" /> Provinces'
            });
var format_CoastalDistricts_2 = new ol.format.GeoJSON();
var features_CoastalDistricts_2 = format_CoastalDistricts_2.readFeatures(json_CoastalDistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoastalDistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalDistricts_2.addFeatures(features_CoastalDistricts_2);
var lyr_CoastalDistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalDistricts_2, 
                style: style_CoastalDistricts_2,
                popuplayertitle: 'Coastal Districts',
                interactive: true,
                title: '<img src="styles/legend/CoastalDistricts_2.png" /> Coastal Districts'
            });
var format_AdministrativePosts_3 = new ol.format.GeoJSON();
var features_AdministrativePosts_3 = format_AdministrativePosts_3.readFeatures(json_AdministrativePosts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdministrativePosts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrativePosts_3.addFeatures(features_AdministrativePosts_3);
var lyr_AdministrativePosts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrativePosts_3, 
                style: style_AdministrativePosts_3,
                popuplayertitle: 'Administrative Posts',
                interactive: true,
                title: '<img src="styles/legend/AdministrativePosts_3.png" /> Administrative Posts'
            });
var format_Bairros_aldeias_localidades_4 = new ol.format.GeoJSON();
var features_Bairros_aldeias_localidades_4 = format_Bairros_aldeias_localidades_4.readFeatures(json_Bairros_aldeias_localidades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bairros_aldeias_localidades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_aldeias_localidades_4.addFeatures(features_Bairros_aldeias_localidades_4);
var lyr_Bairros_aldeias_localidades_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_aldeias_localidades_4, 
                style: style_Bairros_aldeias_localidades_4,
                popuplayertitle: 'Bairros_aldeias_localidades',
                interactive: true,
                title: '<img src="styles/legend/Bairros_aldeias_localidades_4.png" /> Bairros_aldeias_localidades'
            });
var format_Inhambaneprovinceboundaries_5 = new ol.format.GeoJSON();
var features_Inhambaneprovinceboundaries_5 = format_Inhambaneprovinceboundaries_5.readFeatures(json_Inhambaneprovinceboundaries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Inhambaneprovinceboundaries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inhambaneprovinceboundaries_5.addFeatures(features_Inhambaneprovinceboundaries_5);
var lyr_Inhambaneprovinceboundaries_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inhambaneprovinceboundaries_5, 
                style: style_Inhambaneprovinceboundaries_5,
                popuplayertitle: 'Inhambane province boundaries',
                interactive: false,
                title: '<img src="styles/legend/Inhambaneprovinceboundaries_5.png" /> Inhambane province boundaries'
            });
var lyr_PopulationDistribution2025_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Population Distribution 2025<br />\
    <img src="styles/legend/PopulationDistribution2025_6_0.png" /> <= 18<br />\
    <img src="styles/legend/PopulationDistribution2025_6_1.png" /> 18 - 35<br />\
    <img src="styles/legend/PopulationDistribution2025_6_2.png" /> 35 - 53<br />\
    <img src="styles/legend/PopulationDistribution2025_6_3.png" /> 53 - 71<br />\
    <img src="styles/legend/PopulationDistribution2025_6_4.png" /> > 71<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PopulationDistribution2025_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [33.160832, -24.863333, 35.604999, -20.955833]
        })
    });
var lyr_PopulationDistribution2024_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Population Distribution 2024<br />\
    <img src="styles/legend/PopulationDistribution2024_7_0.png" /> <= 17<br />\
    <img src="styles/legend/PopulationDistribution2024_7_1.png" /> 17 - 35<br />\
    <img src="styles/legend/PopulationDistribution2024_7_2.png" /> 35 - 52<br />\
    <img src="styles/legend/PopulationDistribution2024_7_3.png" /> 52 - 69<br />\
    <img src="styles/legend/PopulationDistribution2024_7_4.png" /> > 69<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PopulationDistribution2024_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [33.160832, -24.863333, 35.604999, -20.955833]
        })
    });
var lyr_MOZ_population_v1_1_gridded_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MOZ_population_v1_1_gridded<br />\
    <img src="styles/legend/MOZ_population_v1_1_gridded_8_0.png" /> <= 12<br />\
    <img src="styles/legend/MOZ_population_v1_1_gridded_8_1.png" /> 12 - 22<br />\
    <img src="styles/legend/MOZ_population_v1_1_gridded_8_2.png" /> 22 - 32<br />\
    <img src="styles/legend/MOZ_population_v1_1_gridded_8_3.png" /> 32 - 42<br />\
    <img src="styles/legend/MOZ_population_v1_1_gridded_8_4.png" /> > 42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MOZ_population_v1_1_gridded_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [33.160417, -24.862916, 35.604583, -20.955416]
        })
    });
var format_Settlements_9 = new ol.format.GeoJSON();
var features_Settlements_9 = format_Settlements_9.readFeatures(json_Settlements_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Settlements_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlements_9.addFeatures(features_Settlements_9);
var lyr_Settlements_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Settlements_9, 
                style: style_Settlements_9,
                popuplayertitle: 'Settlements',
                interactive: true,
                title: '<img src="styles/legend/Settlements_9.png" /> Settlements'
            });
var format_NaturalHazardAreas_10 = new ol.format.GeoJSON();
var features_NaturalHazardAreas_10 = format_NaturalHazardAreas_10.readFeatures(json_NaturalHazardAreas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NaturalHazardAreas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalHazardAreas_10.addFeatures(features_NaturalHazardAreas_10);
var lyr_NaturalHazardAreas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalHazardAreas_10, 
                style: style_NaturalHazardAreas_10,
                popuplayertitle: 'Natural Hazard Areas',
                interactive: false,
                title: '<img src="styles/legend/NaturalHazardAreas_10.png" /> Natural Hazard Areas'
            });
var format_Populatedplacespolygons_11 = new ol.format.GeoJSON();
var features_Populatedplacespolygons_11 = format_Populatedplacespolygons_11.readFeatures(json_Populatedplacespolygons_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Populatedplacespolygons_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populatedplacespolygons_11.addFeatures(features_Populatedplacespolygons_11);
var lyr_Populatedplacespolygons_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Populatedplacespolygons_11, 
                style: style_Populatedplacespolygons_11,
                popuplayertitle: 'Populated places (polygons)',
                interactive: true,
                title: '<img src="styles/legend/Populatedplacespolygons_11.png" /> Populated places (polygons)'
            });
var format_PopulatedPlacesPoints_12 = new ol.format.GeoJSON();
var features_PopulatedPlacesPoints_12 = format_PopulatedPlacesPoints_12.readFeatures(json_PopulatedPlacesPoints_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PopulatedPlacesPoints_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulatedPlacesPoints_12.addFeatures(features_PopulatedPlacesPoints_12);
var lyr_PopulatedPlacesPoints_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulatedPlacesPoints_12, 
                style: style_PopulatedPlacesPoints_12,
                popuplayertitle: 'Populated Places (Points)',
                interactive: true,
                title: '<img src="styles/legend/PopulatedPlacesPoints_12.png" /> Populated Places (Points)'
            });
var format_MajorCities_13 = new ol.format.GeoJSON();
var features_MajorCities_13 = format_MajorCities_13.readFeatures(json_MajorCities_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MajorCities_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorCities_13.addFeatures(features_MajorCities_13);
var lyr_MajorCities_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorCities_13, 
                style: style_MajorCities_13,
                popuplayertitle: 'Major Cities',
                interactive: true,
                title: '<img src="styles/legend/MajorCities_13.png" /> Major Cities'
            });
var format_Villages_14 = new ol.format.GeoJSON();
var features_Villages_14 = format_Villages_14.readFeatures(json_Villages_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Villages_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_14.addFeatures(features_Villages_14);
var lyr_Villages_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_14, 
                style: style_Villages_14,
                popuplayertitle: 'Villages',
                interactive: true,
                title: '<img src="styles/legend/Villages_14.png" /> Villages'
            });
var format_Financialservicespoints_15 = new ol.format.GeoJSON();
var features_Financialservicespoints_15 = format_Financialservicespoints_15.readFeatures(json_Financialservicespoints_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Financialservicespoints_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Financialservicespoints_15.addFeatures(features_Financialservicespoints_15);
var lyr_Financialservicespoints_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Financialservicespoints_15, 
                style: style_Financialservicespoints_15,
                popuplayertitle: 'Financial services points',
                interactive: true,
    title: 'Financial services points<br />\
    <img src="styles/legend/Financialservicespoints_15_0.png" /> Barclays<br />\
    <img src="styles/legend/Financialservicespoints_15_1.png" /> BCI<br />\
    <img src="styles/legend/Financialservicespoints_15_2.png" /> BCM<br />\
    <img src="styles/legend/Financialservicespoints_15_3.png" /> fnb<br />\
    <img src="styles/legend/Financialservicespoints_15_4.png" /> Millenium BIM<br />\
    <img src="styles/legend/Financialservicespoints_15_5.png" /> privado<br />\
    <img src="styles/legend/Financialservicespoints_15_6.png" /> Privado<br />' });
var format_Fishingcenters_16 = new ol.format.GeoJSON();
var features_Fishingcenters_16 = format_Fishingcenters_16.readFeatures(json_Fishingcenters_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fishingcenters_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishingcenters_16.addFeatures(features_Fishingcenters_16);
var lyr_Fishingcenters_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fishingcenters_16, 
                style: style_Fishingcenters_16,
                popuplayertitle: 'Fishing centers',
                interactive: true,
                title: '<img src="styles/legend/Fishingcenters_16.png" /> Fishing centers'
            });
var format_Poverty_17 = new ol.format.GeoJSON();
var features_Poverty_17 = format_Poverty_17.readFeatures(json_Poverty_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poverty_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poverty_17.addFeatures(features_Poverty_17);
var lyr_Poverty_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poverty_17, 
                style: style_Poverty_17,
                popuplayertitle: 'Poverty',
                interactive: true,
                title: '<img src="styles/legend/Poverty_17.png" /> Poverty'
            });
var format_Airportspolygons_18 = new ol.format.GeoJSON();
var features_Airportspolygons_18 = format_Airportspolygons_18.readFeatures(json_Airportspolygons_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Airportspolygons_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airportspolygons_18.addFeatures(features_Airportspolygons_18);
var lyr_Airportspolygons_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airportspolygons_18, 
                style: style_Airportspolygons_18,
                popuplayertitle: 'Airports polygons',
                interactive: true,
                title: '<img src="styles/legend/Airportspolygons_18.png" /> Airports polygons'
            });
var format_Airportslines_19 = new ol.format.GeoJSON();
var features_Airportslines_19 = format_Airportslines_19.readFeatures(json_Airportslines_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Airportslines_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airportslines_19.addFeatures(features_Airportslines_19);
var lyr_Airportslines_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airportslines_19, 
                style: style_Airportslines_19,
                popuplayertitle: 'Airports lines',
                interactive: true,
                title: '<img src="styles/legend/Airportslines_19.png" /> Airports lines'
            });
var format_Roads_1_20 = new ol.format.GeoJSON();
var features_Roads_1_20 = format_Roads_1_20.readFeatures(json_Roads_1_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Roads_1_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1_20.addFeatures(features_Roads_1_20);
var lyr_Roads_1_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1_20, 
                style: style_Roads_1_20,
                popuplayertitle: 'Roads_1',
                interactive: true,
                title: '<img src="styles/legend/Roads_1_20.png" /> Roads_1'
            });
var format_Roads_21 = new ol.format.GeoJSON();
var features_Roads_21 = format_Roads_21.readFeatures(json_Roads_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Roads_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_21.addFeatures(features_Roads_21);
var lyr_Roads_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_21, 
                style: style_Roads_21,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_21.png" /> Roads'
            });
var format_Seaportslines_22 = new ol.format.GeoJSON();
var features_Seaportslines_22 = format_Seaportslines_22.readFeatures(json_Seaportslines_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Seaportslines_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seaportslines_22.addFeatures(features_Seaportslines_22);
var lyr_Seaportslines_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seaportslines_22, 
                style: style_Seaportslines_22,
                popuplayertitle: 'Sea ports lines',
                interactive: true,
                title: '<img src="styles/legend/Seaportslines_22.png" /> Sea ports lines'
            });
var format_Seaportspoints_23 = new ol.format.GeoJSON();
var features_Seaportspoints_23 = format_Seaportspoints_23.readFeatures(json_Seaportspoints_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Seaportspoints_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seaportspoints_23.addFeatures(features_Seaportspoints_23);
var lyr_Seaportspoints_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seaportspoints_23, 
                style: style_Seaportspoints_23,
                popuplayertitle: 'Sea ports points',
                interactive: true,
                title: '<img src="styles/legend/Seaportspoints_23.png" /> Sea ports points'
            });
var format_Ports_24 = new ol.format.GeoJSON();
var features_Ports_24 = format_Ports_24.readFeatures(json_Ports_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ports_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ports_24.addFeatures(features_Ports_24);
var lyr_Ports_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ports_24, 
                style: style_Ports_24,
                popuplayertitle: 'Ports',
                interactive: true,
                title: '<img src="styles/legend/Ports_24.png" /> Ports'
            });
var format_TransportationUseRoads_25 = new ol.format.GeoJSON();
var features_TransportationUseRoads_25 = format_TransportationUseRoads_25.readFeatures(json_TransportationUseRoads_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TransportationUseRoads_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportationUseRoads_25.addFeatures(features_TransportationUseRoads_25);
var lyr_TransportationUseRoads_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportationUseRoads_25, 
                style: style_TransportationUseRoads_25,
                popuplayertitle: 'Transportation Use Roads',
                interactive: true,
                title: '<img src="styles/legend/TransportationUseRoads_25.png" /> Transportation Use Roads'
            });
var format_Airportspoints_26 = new ol.format.GeoJSON();
var features_Airportspoints_26 = format_Airportspoints_26.readFeatures(json_Airportspoints_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Airportspoints_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airportspoints_26.addFeatures(features_Airportspoints_26);
var lyr_Airportspoints_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airportspoints_26, 
                style: style_Airportspoints_26,
                popuplayertitle: 'Airports points',
                interactive: true,
                title: '<img src="styles/legend/Airportspoints_26.png" /> Airports points'
            });
var format_TelecommunicationTowers_27 = new ol.format.GeoJSON();
var features_TelecommunicationTowers_27 = format_TelecommunicationTowers_27.readFeatures(json_TelecommunicationTowers_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TelecommunicationTowers_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TelecommunicationTowers_27.addFeatures(features_TelecommunicationTowers_27);
var lyr_TelecommunicationTowers_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TelecommunicationTowers_27, 
                style: style_TelecommunicationTowers_27,
                popuplayertitle: 'Telecommunication Towers',
                interactive: true,
                title: '<img src="styles/legend/TelecommunicationTowers_27.png" /> Telecommunication Towers'
            });
var format_Pointsofinterest_28 = new ol.format.GeoJSON();
var features_Pointsofinterest_28 = format_Pointsofinterest_28.readFeatures(json_Pointsofinterest_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pointsofinterest_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsofinterest_28.addFeatures(features_Pointsofinterest_28);
var lyr_Pointsofinterest_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsofinterest_28, 
                style: style_Pointsofinterest_28,
                popuplayertitle: 'Points of interest',
                interactive: true,
                title: '<img src="styles/legend/Pointsofinterest_28.png" /> Points of interest'
            });
var format_MarineAquaculturePotentialDistricts_29 = new ol.format.GeoJSON();
var features_MarineAquaculturePotentialDistricts_29 = format_MarineAquaculturePotentialDistricts_29.readFeatures(json_MarineAquaculturePotentialDistricts_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MarineAquaculturePotentialDistricts_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineAquaculturePotentialDistricts_29.addFeatures(features_MarineAquaculturePotentialDistricts_29);
var lyr_MarineAquaculturePotentialDistricts_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarineAquaculturePotentialDistricts_29, 
                style: style_MarineAquaculturePotentialDistricts_29,
                popuplayertitle: 'Marine Aquaculture Potential Districts',
                interactive: true,
                title: '<img src="styles/legend/MarineAquaculturePotentialDistricts_29.png" /> Marine Aquaculture Potential Districts'
            });
var format_UpperGroundwaterAquifers_30 = new ol.format.GeoJSON();
var features_UpperGroundwaterAquifers_30 = format_UpperGroundwaterAquifers_30.readFeatures(json_UpperGroundwaterAquifers_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UpperGroundwaterAquifers_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpperGroundwaterAquifers_30.addFeatures(features_UpperGroundwaterAquifers_30);
var lyr_UpperGroundwaterAquifers_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpperGroundwaterAquifers_30, 
                style: style_UpperGroundwaterAquifers_30,
                popuplayertitle: 'Upper Groundwater Aquifers',
                interactive: true,
                title: '<img src="styles/legend/UpperGroundwaterAquifers_30.png" /> Upper Groundwater Aquifers'
            });
var format_ClimateTypes_31 = new ol.format.GeoJSON();
var features_ClimateTypes_31 = format_ClimateTypes_31.readFeatures(json_ClimateTypes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClimateTypes_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClimateTypes_31.addFeatures(features_ClimateTypes_31);
var lyr_ClimateTypes_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClimateTypes_31, 
                style: style_ClimateTypes_31,
                popuplayertitle: 'Climate Types',
                interactive: true,
    title: 'Climate Types<br />\
    <img src="styles/legend/ClimateTypes_31_0.png" /> Clima tropical húmido<br />\
    <img src="styles/legend/ClimateTypes_31_1.png" /> Tropical seco<br />' });
var format_KppenClimateClassification_32 = new ol.format.GeoJSON();
var features_KppenClimateClassification_32 = format_KppenClimateClassification_32.readFeatures(json_KppenClimateClassification_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KppenClimateClassification_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KppenClimateClassification_32.addFeatures(features_KppenClimateClassification_32);
var lyr_KppenClimateClassification_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KppenClimateClassification_32, 
                style: style_KppenClimateClassification_32,
                popuplayertitle: 'Köppen Climate Classification',
                interactive: true,
                title: '<img src="styles/legend/KppenClimateClassification_32.png" /> Köppen Climate Classification'
            });
var format_HydrocarbonConcessions_2_33 = new ol.format.GeoJSON();
var features_HydrocarbonConcessions_2_33 = format_HydrocarbonConcessions_2_33.readFeatures(json_HydrocarbonConcessions_2_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HydrocarbonConcessions_2_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydrocarbonConcessions_2_33.addFeatures(features_HydrocarbonConcessions_2_33);
var lyr_HydrocarbonConcessions_2_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydrocarbonConcessions_2_33, 
                style: style_HydrocarbonConcessions_2_33,
                popuplayertitle: 'Hydrocarbon Concessions_2',
                interactive: true,
                title: '<img src="styles/legend/HydrocarbonConcessions_2_33.png" /> Hydrocarbon Concessions_2'
            });
var format_HydrocarbonConcessions_1_34 = new ol.format.GeoJSON();
var features_HydrocarbonConcessions_1_34 = format_HydrocarbonConcessions_1_34.readFeatures(json_HydrocarbonConcessions_1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HydrocarbonConcessions_1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydrocarbonConcessions_1_34.addFeatures(features_HydrocarbonConcessions_1_34);
var lyr_HydrocarbonConcessions_1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydrocarbonConcessions_1_34, 
                style: style_HydrocarbonConcessions_1_34,
                popuplayertitle: 'Hydrocarbon Concessions_1',
                interactive: false,
                title: '<img src="styles/legend/HydrocarbonConcessions_1_34.png" /> Hydrocarbon Concessions_1'
            });
var format_MiningConcessions2018_35 = new ol.format.GeoJSON();
var features_MiningConcessions2018_35 = format_MiningConcessions2018_35.readFeatures(json_MiningConcessions2018_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MiningConcessions2018_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningConcessions2018_35.addFeatures(features_MiningConcessions2018_35);
var lyr_MiningConcessions2018_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningConcessions2018_35, 
                style: style_MiningConcessions2018_35,
                popuplayertitle: 'Mining Concessions 2018',
                interactive: true,
                title: '<img src="styles/legend/MiningConcessions2018_35.png" /> Mining Concessions 2018'
            });
var format_MiningConcessions2011_36 = new ol.format.GeoJSON();
var features_MiningConcessions2011_36 = format_MiningConcessions2011_36.readFeatures(json_MiningConcessions2011_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MiningConcessions2011_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningConcessions2011_36.addFeatures(features_MiningConcessions2011_36);
var lyr_MiningConcessions2011_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningConcessions2011_36, 
                style: style_MiningConcessions2011_36,
                popuplayertitle: 'Mining Concessions 2011',
                interactive: true,
                title: '<img src="styles/legend/MiningConcessions2011_36.png" /> Mining Concessions 2011'
            });
var format_MiningConcessions2006_37 = new ol.format.GeoJSON();
var features_MiningConcessions2006_37 = format_MiningConcessions2006_37.readFeatures(json_MiningConcessions2006_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MiningConcessions2006_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningConcessions2006_37.addFeatures(features_MiningConcessions2006_37);
var lyr_MiningConcessions2006_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningConcessions2006_37, 
                style: style_MiningConcessions2006_37,
                popuplayertitle: 'Mining Concessions 2006',
                interactive: true,
                title: '<img src="styles/legend/MiningConcessions2006_37.png" /> Mining Concessions 2006'
            });
var format_FreshwaterAquaculturePotentialDistricts_38 = new ol.format.GeoJSON();
var features_FreshwaterAquaculturePotentialDistricts_38 = format_FreshwaterAquaculturePotentialDistricts_38.readFeatures(json_FreshwaterAquaculturePotentialDistricts_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FreshwaterAquaculturePotentialDistricts_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreshwaterAquaculturePotentialDistricts_38.addFeatures(features_FreshwaterAquaculturePotentialDistricts_38);
var lyr_FreshwaterAquaculturePotentialDistricts_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FreshwaterAquaculturePotentialDistricts_38, 
                style: style_FreshwaterAquaculturePotentialDistricts_38,
                popuplayertitle: 'Freshwater Aquaculture Potential Districts',
                interactive: true,
                title: '<img src="styles/legend/FreshwaterAquaculturePotentialDistricts_38.png" /> Freshwater Aquaculture Potential Districts'
            });
var format_EcoregionsBiomes_39 = new ol.format.GeoJSON();
var features_EcoregionsBiomes_39 = format_EcoregionsBiomes_39.readFeatures(json_EcoregionsBiomes_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EcoregionsBiomes_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcoregionsBiomes_39.addFeatures(features_EcoregionsBiomes_39);
var lyr_EcoregionsBiomes_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EcoregionsBiomes_39, 
                style: style_EcoregionsBiomes_39,
                popuplayertitle: 'Ecoregions & Biomes',
                interactive: true,
    title: 'Ecoregions & Biomes<br />\
    <img src="styles/legend/EcoregionsBiomes_39_0.png" /> Tropical & Subtropical Grasslands, Savannas & Shrublands<br />\
    <img src="styles/legend/EcoregionsBiomes_39_1.png" /> Tropical & Subtropical Moist Broadleaf Forests<br />' });
var format_Ecoregions_40 = new ol.format.GeoJSON();
var features_Ecoregions_40 = format_Ecoregions_40.readFeatures(json_Ecoregions_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ecoregions_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecoregions_40.addFeatures(features_Ecoregions_40);
var lyr_Ecoregions_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecoregions_40, 
                style: style_Ecoregions_40,
                popuplayertitle: 'Ecoregions',
                interactive: true,
                title: '<img src="styles/legend/Ecoregions_40.png" /> Ecoregions'
            });
var format_AgroEcologicalZones_41 = new ol.format.GeoJSON();
var features_AgroEcologicalZones_41 = format_AgroEcologicalZones_41.readFeatures(json_AgroEcologicalZones_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AgroEcologicalZones_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgroEcologicalZones_41.addFeatures(features_AgroEcologicalZones_41);
var lyr_AgroEcologicalZones_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgroEcologicalZones_41, 
                style: style_AgroEcologicalZones_41,
                popuplayertitle: 'Agro-Ecological Zones',
                interactive: true,
                title: '<img src="styles/legend/AgroEcologicalZones_41.png" /> Agro-Ecological Zones'
            });
var format_Flora_42 = new ol.format.GeoJSON();
var features_Flora_42 = format_Flora_42.readFeatures(json_Flora_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Flora_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora_42.addFeatures(features_Flora_42);
var lyr_Flora_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flora_42, 
                style: style_Flora_42,
                popuplayertitle: 'Flora',
                interactive: true,
    title: 'Flora<br />\
    <img src="styles/legend/Flora_42_0.png" /> DECIDUOUS DRY MIOMBO SAVANNA WOODLAND_ DISCONTINUOUS DRY SAVANNA (LOWLAND)<br />\
    <img src="styles/legend/Flora_42_1.png" /> DECIDUOUS MIOMBO TREE SAVANNA (SUBLITTORAL)<br />\
    <img src="styles/legend/Flora_42_2.png" /> DECIDUOUS MIOMBO TREE SAVANNA WITH GREGARIOUS DENSE DRY WOODLAND<br />\
    <img src="styles/legend/Flora_42_3.png" /> DECIDUOUS TREE SAVANNA WITH PALMS (BADLY DRAINED, LOWLAND)<br />\
    <img src="styles/legend/Flora_42_4.png" /> DRY DECIDUOUS TREE SAVANNA<br />\
    <img src="styles/legend/Flora_42_5.png" /> DRY DECIDUOUS TREE/SHRUB SAVANNA (GHANSI QUARTZITES AND LIMESTONES)<br />\
    <img src="styles/legend/Flora_42_6.png" /> DRY EARLY DECIDUOUS (STONY SLOPES OR ESCARPMENTS) TREE SAVANNA<br />\
    <img src="styles/legend/Flora_42_7.png" /> DRY SEMI-DECIDUOUS (LOWLAND-SUBLITTORAL) FOREST<br />\
    <img src="styles/legend/Flora_42_8.png" /> DRY TREE SAVANNA-MOIST GRASSLAND-FRINGING FOREST-AQUATIC FLORA MOSAIC OF BIG RIVER ALLUVIUMS AND DEL<br />\
    <img src="styles/legend/Flora_42_9.png" /> LITTORAL THICKET AND FOREST OF RECENT DUNES<br />\
    <img src="styles/legend/Flora_42_10.png" /> MIOMBO WOODLAND ON LAKE BASIN AND SUL DO SAVE SANDS<br />\
    <img src="styles/legend/Flora_42_11.png" /> SHRUB SAVANNA ON SALINE SOILS<br />' });
var format_FreshwaterEcoregions_43 = new ol.format.GeoJSON();
var features_FreshwaterEcoregions_43 = format_FreshwaterEcoregions_43.readFeatures(json_FreshwaterEcoregions_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FreshwaterEcoregions_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreshwaterEcoregions_43.addFeatures(features_FreshwaterEcoregions_43);
var lyr_FreshwaterEcoregions_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FreshwaterEcoregions_43, 
                style: style_FreshwaterEcoregions_43,
                popuplayertitle: 'Freshwater Ecoregions',
                interactive: true,
                title: '<img src="styles/legend/FreshwaterEcoregions_43.png" /> Freshwater Ecoregions'
            });
var format_MarineEcoregions_44 = new ol.format.GeoJSON();
var features_MarineEcoregions_44 = format_MarineEcoregions_44.readFeatures(json_MarineEcoregions_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MarineEcoregions_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineEcoregions_44.addFeatures(features_MarineEcoregions_44);
var lyr_MarineEcoregions_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarineEcoregions_44, 
                style: style_MarineEcoregions_44,
                popuplayertitle: 'Marine Ecoregions',
                interactive: false,
                title: '<img src="styles/legend/MarineEcoregions_44.png" /> Marine Ecoregions'
            });
var format_TerrestrialEcoregions_45 = new ol.format.GeoJSON();
var features_TerrestrialEcoregions_45 = format_TerrestrialEcoregions_45.readFeatures(json_TerrestrialEcoregions_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerrestrialEcoregions_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrestrialEcoregions_45.addFeatures(features_TerrestrialEcoregions_45);
var lyr_TerrestrialEcoregions_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrestrialEcoregions_45, 
                style: style_TerrestrialEcoregions_45,
                popuplayertitle: 'Terrestrial Ecoregions',
                interactive: true,
                title: '<img src="styles/legend/TerrestrialEcoregions_45.png" /> Terrestrial Ecoregions'
            });
var format_ConservationAreas_46 = new ol.format.GeoJSON();
var features_ConservationAreas_46 = format_ConservationAreas_46.readFeatures(json_ConservationAreas_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ConservationAreas_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConservationAreas_46.addFeatures(features_ConservationAreas_46);
var lyr_ConservationAreas_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConservationAreas_46, 
                style: style_ConservationAreas_46,
                popuplayertitle: 'Conservation Areas',
                interactive: true,
                title: '<img src="styles/legend/ConservationAreas_46.png" /> Conservation Areas'
            });
var format_ReservasNacionais_47 = new ol.format.GeoJSON();
var features_ReservasNacionais_47 = format_ReservasNacionais_47.readFeatures(json_ReservasNacionais_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ReservasNacionais_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservasNacionais_47.addFeatures(features_ReservasNacionais_47);
var lyr_ReservasNacionais_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservasNacionais_47, 
                style: style_ReservasNacionais_47,
                popuplayertitle: 'Reservas Nacionais',
                interactive: true,
                title: '<img src="styles/legend/ReservasNacionais_47.png" /> Reservas Nacionais'
            });
var format_ThreatenedorCriticalEcosystems_48 = new ol.format.GeoJSON();
var features_ThreatenedorCriticalEcosystems_48 = format_ThreatenedorCriticalEcosystems_48.readFeatures(json_ThreatenedorCriticalEcosystems_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ThreatenedorCriticalEcosystems_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThreatenedorCriticalEcosystems_48.addFeatures(features_ThreatenedorCriticalEcosystems_48);
var lyr_ThreatenedorCriticalEcosystems_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThreatenedorCriticalEcosystems_48, 
                style: style_ThreatenedorCriticalEcosystems_48,
                popuplayertitle: 'Threatened or Critical Ecosystems',
                interactive: true,
                title: '<img src="styles/legend/ThreatenedorCriticalEcosystems_48.png" /> Threatened or Critical Ecosystems'
            });
var format_AreasofEndemism_49 = new ol.format.GeoJSON();
var features_AreasofEndemism_49 = format_AreasofEndemism_49.readFeatures(json_AreasofEndemism_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AreasofEndemism_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasofEndemism_49.addFeatures(features_AreasofEndemism_49);
var lyr_AreasofEndemism_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasofEndemism_49, 
                style: style_AreasofEndemism_49,
                popuplayertitle: 'Areas of Endemism',
                interactive: true,
                title: '<img src="styles/legend/AreasofEndemism_49.png" /> Areas of Endemism'
            });
var format_AreasofHighScientificValue_50 = new ol.format.GeoJSON();
var features_AreasofHighScientificValue_50 = format_AreasofHighScientificValue_50.readFeatures(json_AreasofHighScientificValue_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AreasofHighScientificValue_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasofHighScientificValue_50.addFeatures(features_AreasofHighScientificValue_50);
var lyr_AreasofHighScientificValue_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasofHighScientificValue_50, 
                style: style_AreasofHighScientificValue_50,
                popuplayertitle: 'Areas of High Scientific Value',
                interactive: false,
                title: '<img src="styles/legend/AreasofHighScientificValue_50.png" /> Areas of High Scientific Value'
            });
var format_MigratorySpeciesHabitat_51 = new ol.format.GeoJSON();
var features_MigratorySpeciesHabitat_51 = format_MigratorySpeciesHabitat_51.readFeatures(json_MigratorySpeciesHabitat_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MigratorySpeciesHabitat_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MigratorySpeciesHabitat_51.addFeatures(features_MigratorySpeciesHabitat_51);
var lyr_MigratorySpeciesHabitat_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MigratorySpeciesHabitat_51, 
                style: style_MigratorySpeciesHabitat_51,
                popuplayertitle: 'Migratory Species Habitat',
                interactive: false,
                title: '<img src="styles/legend/MigratorySpeciesHabitat_51.png" /> Migratory Species Habitat'
            });
var format_GlobalCoralReefs_52 = new ol.format.GeoJSON();
var features_GlobalCoralReefs_52 = format_GlobalCoralReefs_52.readFeatures(json_GlobalCoralReefs_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GlobalCoralReefs_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalCoralReefs_52.addFeatures(features_GlobalCoralReefs_52);
var lyr_GlobalCoralReefs_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalCoralReefs_52, 
                style: style_GlobalCoralReefs_52,
                popuplayertitle: 'Global Coral Reefs',
                interactive: false,
                title: '<img src="styles/legend/GlobalCoralReefs_52.png" /> Global Coral Reefs'
            });
var format_MarineHabitatsandCorals_53 = new ol.format.GeoJSON();
var features_MarineHabitatsandCorals_53 = format_MarineHabitatsandCorals_53.readFeatures(json_MarineHabitatsandCorals_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MarineHabitatsandCorals_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineHabitatsandCorals_53.addFeatures(features_MarineHabitatsandCorals_53);
var lyr_MarineHabitatsandCorals_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarineHabitatsandCorals_53, 
                style: style_MarineHabitatsandCorals_53,
                popuplayertitle: 'Marine Habitats and Corals',
                interactive: false,
                title: '<img src="styles/legend/MarineHabitatsandCorals_53.png" /> Marine Habitats and Corals'
            });
var format_DugongHabitats_54 = new ol.format.GeoJSON();
var features_DugongHabitats_54 = format_DugongHabitats_54.readFeatures(json_DugongHabitats_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DugongHabitats_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DugongHabitats_54.addFeatures(features_DugongHabitats_54);
var lyr_DugongHabitats_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DugongHabitats_54, 
                style: style_DugongHabitats_54,
                popuplayertitle: 'Dugong Habitats',
                interactive: false,
                title: '<img src="styles/legend/DugongHabitats_54.png" /> Dugong Habitats'
            });
var format_AreasofKeyEvolutionaryProcesses_55 = new ol.format.GeoJSON();
var features_AreasofKeyEvolutionaryProcesses_55 = format_AreasofKeyEvolutionaryProcesses_55.readFeatures(json_AreasofKeyEvolutionaryProcesses_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AreasofKeyEvolutionaryProcesses_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasofKeyEvolutionaryProcesses_55.addFeatures(features_AreasofKeyEvolutionaryProcesses_55);
var lyr_AreasofKeyEvolutionaryProcesses_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasofKeyEvolutionaryProcesses_55, 
                style: style_AreasofKeyEvolutionaryProcesses_55,
                popuplayertitle: 'Areas of Key Evolutionary Processes',
                interactive: false,
                title: '<img src="styles/legend/AreasofKeyEvolutionaryProcesses_55.png" /> Areas of Key Evolutionary Processes'
            });
var format_EndemicSpeciesHabitats_56 = new ol.format.GeoJSON();
var features_EndemicSpeciesHabitats_56 = format_EndemicSpeciesHabitats_56.readFeatures(json_EndemicSpeciesHabitats_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EndemicSpeciesHabitats_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EndemicSpeciesHabitats_56.addFeatures(features_EndemicSpeciesHabitats_56);
var lyr_EndemicSpeciesHabitats_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EndemicSpeciesHabitats_56, 
                style: style_EndemicSpeciesHabitats_56,
                popuplayertitle: 'Endemic Species Habitats',
                interactive: true,
                title: '<img src="styles/legend/EndemicSpeciesHabitats_56.png" /> Endemic Species Habitats'
            });
var format_IFCHabitatCategories_57 = new ol.format.GeoJSON();
var features_IFCHabitatCategories_57 = format_IFCHabitatCategories_57.readFeatures(json_IFCHabitatCategories_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IFCHabitatCategories_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IFCHabitatCategories_57.addFeatures(features_IFCHabitatCategories_57);
var lyr_IFCHabitatCategories_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IFCHabitatCategories_57, 
                style: style_IFCHabitatCategories_57,
                popuplayertitle: 'IFC Habitat Categories',
                interactive: true,
    title: 'IFC Habitat Categories<br />\
    <img src="styles/legend/IFCHabitatCategories_57_0.png" /> Misto<br />\
    <img src="styles/legend/IFCHabitatCategories_57_1.png" /> Modificado<br />\
    <img src="styles/legend/IFCHabitatCategories_57_2.png" /> Natural<br />' });
var format_KeyBiodiversityAreas_58 = new ol.format.GeoJSON();
var features_KeyBiodiversityAreas_58 = format_KeyBiodiversityAreas_58.readFeatures(json_KeyBiodiversityAreas_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KeyBiodiversityAreas_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyBiodiversityAreas_58.addFeatures(features_KeyBiodiversityAreas_58);
var lyr_KeyBiodiversityAreas_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyBiodiversityAreas_58, 
                style: style_KeyBiodiversityAreas_58,
                popuplayertitle: 'Key Biodiversity Areas',
                interactive: true,
                title: '<img src="styles/legend/KeyBiodiversityAreas_58.png" /> Key Biodiversity Areas'
            });
var format_MarineHabitats_59 = new ol.format.GeoJSON();
var features_MarineHabitats_59 = format_MarineHabitats_59.readFeatures(json_MarineHabitats_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MarineHabitats_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineHabitats_59.addFeatures(features_MarineHabitats_59);
var lyr_MarineHabitats_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarineHabitats_59, 
                style: style_MarineHabitats_59,
                popuplayertitle: 'Marine Habitats',
                interactive: false,
                title: '<img src="styles/legend/MarineHabitats_59.png" /> Marine Habitats'
            });
var format_MozambiqueMangroves_60 = new ol.format.GeoJSON();
var features_MozambiqueMangroves_60 = format_MozambiqueMangroves_60.readFeatures(json_MozambiqueMangroves_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MozambiqueMangroves_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MozambiqueMangroves_60.addFeatures(features_MozambiqueMangroves_60);
var lyr_MozambiqueMangroves_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MozambiqueMangroves_60, 
                style: style_MozambiqueMangroves_60,
                popuplayertitle: 'Mozambique Mangroves',
                interactive: false,
                title: '<img src="styles/legend/MozambiqueMangroves_60.png" /> Mozambique Mangroves'
            });
var format_MangrovesWWF2018_61 = new ol.format.GeoJSON();
var features_MangrovesWWF2018_61 = format_MangrovesWWF2018_61.readFeatures(json_MangrovesWWF2018_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MangrovesWWF2018_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangrovesWWF2018_61.addFeatures(features_MangrovesWWF2018_61);
var lyr_MangrovesWWF2018_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangrovesWWF2018_61, 
                style: style_MangrovesWWF2018_61,
                popuplayertitle: 'Mangroves WWF 2018',
                interactive: false,
                title: '<img src="styles/legend/MangrovesWWF2018_61.png" /> Mangroves WWF 2018'
            });
var format_MangrovesUEM2013_62 = new ol.format.GeoJSON();
var features_MangrovesUEM2013_62 = format_MangrovesUEM2013_62.readFeatures(json_MangrovesUEM2013_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MangrovesUEM2013_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangrovesUEM2013_62.addFeatures(features_MangrovesUEM2013_62);
var lyr_MangrovesUEM2013_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangrovesUEM2013_62, 
                style: style_MangrovesUEM2013_62,
                popuplayertitle: 'Mangroves UEM 2013',
                interactive: false,
                title: '<img src="styles/legend/MangrovesUEM2013_62.png" /> Mangroves UEM 2013'
            });
var format_MangrovesRCMDR2015_63 = new ol.format.GeoJSON();
var features_MangrovesRCMDR2015_63 = format_MangrovesRCMDR2015_63.readFeatures(json_MangrovesRCMDR2015_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MangrovesRCMDR2015_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangrovesRCMDR2015_63.addFeatures(features_MangrovesRCMDR2015_63);
var lyr_MangrovesRCMDR2015_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangrovesRCMDR2015_63, 
                style: style_MangrovesRCMDR2015_63,
                popuplayertitle: 'Mangroves RCMDR 2015',
                interactive: false,
                title: '<img src="styles/legend/MangrovesRCMDR2015_63.png" /> Mangroves RCMDR 2015'
            });
var format_MangrovesDIRF_64 = new ol.format.GeoJSON();
var features_MangrovesDIRF_64 = format_MangrovesDIRF_64.readFeatures(json_MangrovesDIRF_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MangrovesDIRF_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangrovesDIRF_64.addFeatures(features_MangrovesDIRF_64);
var lyr_MangrovesDIRF_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangrovesDIRF_64, 
                style: style_MangrovesDIRF_64,
                popuplayertitle: 'Mangroves DIRF',
                interactive: false,
                title: '<img src="styles/legend/MangrovesDIRF_64.png" /> Mangroves DIRF'
            });
var format_Mangroves2020_65 = new ol.format.GeoJSON();
var features_Mangroves2020_65 = format_Mangroves2020_65.readFeatures(json_Mangroves2020_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2020_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2020_65.addFeatures(features_Mangroves2020_65);
var lyr_Mangroves2020_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2020_65, 
                style: style_Mangroves2020_65,
                popuplayertitle: 'Mangroves 2020',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2020_65.png" /> Mangroves 2020'
            });
var format_Mangroves2019_66 = new ol.format.GeoJSON();
var features_Mangroves2019_66 = format_Mangroves2019_66.readFeatures(json_Mangroves2019_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2019_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2019_66.addFeatures(features_Mangroves2019_66);
var lyr_Mangroves2019_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2019_66, 
                style: style_Mangroves2019_66,
                popuplayertitle: 'Mangroves 2019',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2019_66.png" /> Mangroves 2019'
            });
var format_Mangroves2018_67 = new ol.format.GeoJSON();
var features_Mangroves2018_67 = format_Mangroves2018_67.readFeatures(json_Mangroves2018_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2018_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2018_67.addFeatures(features_Mangroves2018_67);
var lyr_Mangroves2018_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2018_67, 
                style: style_Mangroves2018_67,
                popuplayertitle: 'Mangroves 2018',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2018_67.png" /> Mangroves 2018'
            });
var format_Mangroves2017_68 = new ol.format.GeoJSON();
var features_Mangroves2017_68 = format_Mangroves2017_68.readFeatures(json_Mangroves2017_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2017_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2017_68.addFeatures(features_Mangroves2017_68);
var lyr_Mangroves2017_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2017_68, 
                style: style_Mangroves2017_68,
                popuplayertitle: 'Mangroves 2017',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2017_68.png" /> Mangroves 2017'
            });
var format_Mangroves2016_69 = new ol.format.GeoJSON();
var features_Mangroves2016_69 = format_Mangroves2016_69.readFeatures(json_Mangroves2016_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2016_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2016_69.addFeatures(features_Mangroves2016_69);
var lyr_Mangroves2016_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2016_69, 
                style: style_Mangroves2016_69,
                popuplayertitle: 'Mangroves 2016',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2016_69.png" /> Mangroves 2016'
            });
var format_Mangroves2015_70 = new ol.format.GeoJSON();
var features_Mangroves2015_70 = format_Mangroves2015_70.readFeatures(json_Mangroves2015_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2015_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2015_70.addFeatures(features_Mangroves2015_70);
var lyr_Mangroves2015_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2015_70, 
                style: style_Mangroves2015_70,
                popuplayertitle: 'Mangroves 2015',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2015_70.png" /> Mangroves 2015'
            });
var format_Mangroves2010_71 = new ol.format.GeoJSON();
var features_Mangroves2010_71 = format_Mangroves2010_71.readFeatures(json_Mangroves2010_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2010_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2010_71.addFeatures(features_Mangroves2010_71);
var lyr_Mangroves2010_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2010_71, 
                style: style_Mangroves2010_71,
                popuplayertitle: 'Mangroves 2010',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2010_71.png" /> Mangroves 2010'
            });
var format_Mangroves2009_72 = new ol.format.GeoJSON();
var features_Mangroves2009_72 = format_Mangroves2009_72.readFeatures(json_Mangroves2009_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2009_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2009_72.addFeatures(features_Mangroves2009_72);
var lyr_Mangroves2009_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2009_72, 
                style: style_Mangroves2009_72,
                popuplayertitle: 'Mangroves 2009',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2009_72.png" /> Mangroves 2009'
            });
var format_Mangroves2008_73 = new ol.format.GeoJSON();
var features_Mangroves2008_73 = format_Mangroves2008_73.readFeatures(json_Mangroves2008_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2008_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2008_73.addFeatures(features_Mangroves2008_73);
var lyr_Mangroves2008_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2008_73, 
                style: style_Mangroves2008_73,
                popuplayertitle: 'Mangroves 2008',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2008_73.png" /> Mangroves 2008'
            });
var format_Mangroves2007_74 = new ol.format.GeoJSON();
var features_Mangroves2007_74 = format_Mangroves2007_74.readFeatures(json_Mangroves2007_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves2007_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves2007_74.addFeatures(features_Mangroves2007_74);
var lyr_Mangroves2007_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves2007_74, 
                style: style_Mangroves2007_74,
                popuplayertitle: 'Mangroves 2007',
                interactive: false,
                title: '<img src="styles/legend/Mangroves2007_74.png" /> Mangroves 2007'
            });
var format_Mangroves1996_75 = new ol.format.GeoJSON();
var features_Mangroves1996_75 = format_Mangroves1996_75.readFeatures(json_Mangroves1996_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mangroves1996_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves1996_75.addFeatures(features_Mangroves1996_75);
var lyr_Mangroves1996_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves1996_75, 
                style: style_Mangroves1996_75,
                popuplayertitle: 'Mangroves 1996',
                interactive: false,
                title: '<img src="styles/legend/Mangroves1996_75.png" /> Mangroves 1996'
            });
var format_BiodiversityHotspots_76 = new ol.format.GeoJSON();
var features_BiodiversityHotspots_76 = format_BiodiversityHotspots_76.readFeatures(json_BiodiversityHotspots_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BiodiversityHotspots_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiodiversityHotspots_76.addFeatures(features_BiodiversityHotspots_76);
var lyr_BiodiversityHotspots_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiodiversityHotspots_76, 
                style: style_BiodiversityHotspots_76,
                popuplayertitle: 'Biodiversity Hotspots',
                interactive: true,
                title: '<img src="styles/legend/BiodiversityHotspots_76.png" /> Biodiversity Hotspots'
            });
var format_SaltmarshDistribution_77 = new ol.format.GeoJSON();
var features_SaltmarshDistribution_77 = format_SaltmarshDistribution_77.readFeatures(json_SaltmarshDistribution_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SaltmarshDistribution_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltmarshDistribution_77.addFeatures(features_SaltmarshDistribution_77);
var lyr_SaltmarshDistribution_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltmarshDistribution_77, 
                style: style_SaltmarshDistribution_77,
                popuplayertitle: 'Saltmarsh Distribution',
                interactive: true,
                title: '<img src="styles/legend/SaltmarshDistribution_77.png" /> Saltmarsh Distribution'
            });
var format_SeagrassPolygons_78 = new ol.format.GeoJSON();
var features_SeagrassPolygons_78 = format_SeagrassPolygons_78.readFeatures(json_SeagrassPolygons_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SeagrassPolygons_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeagrassPolygons_78.addFeatures(features_SeagrassPolygons_78);
var lyr_SeagrassPolygons_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeagrassPolygons_78, 
                style: style_SeagrassPolygons_78,
                popuplayertitle: 'Seagrass Polygons',
                interactive: false,
                title: '<img src="styles/legend/SeagrassPolygons_78.png" /> Seagrass Polygons'
            });
var format_MozambiqueCoralReefs_79 = new ol.format.GeoJSON();
var features_MozambiqueCoralReefs_79 = format_MozambiqueCoralReefs_79.readFeatures(json_MozambiqueCoralReefs_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MozambiqueCoralReefs_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MozambiqueCoralReefs_79.addFeatures(features_MozambiqueCoralReefs_79);
var lyr_MozambiqueCoralReefs_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MozambiqueCoralReefs_79, 
                style: style_MozambiqueCoralReefs_79,
                popuplayertitle: 'Mozambique Coral Reefs',
                interactive: true,
                title: '<img src="styles/legend/MozambiqueCoralReefs_79.png" /> Mozambique Coral Reefs'
            });
var format_WarmWaterCoralReefs2018_80 = new ol.format.GeoJSON();
var features_WarmWaterCoralReefs2018_80 = format_WarmWaterCoralReefs2018_80.readFeatures(json_WarmWaterCoralReefs2018_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WarmWaterCoralReefs2018_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarmWaterCoralReefs2018_80.addFeatures(features_WarmWaterCoralReefs2018_80);
var lyr_WarmWaterCoralReefs2018_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarmWaterCoralReefs2018_80, 
                style: style_WarmWaterCoralReefs2018_80,
                popuplayertitle: 'Warm-Water Coral Reefs 2018',
                interactive: false,
                title: '<img src="styles/legend/WarmWaterCoralReefs2018_80.png" /> Warm-Water Coral Reefs 2018'
            });
var format_ColdWaterCoralReefs2017_81 = new ol.format.GeoJSON();
var features_ColdWaterCoralReefs2017_81 = format_ColdWaterCoralReefs2017_81.readFeatures(json_ColdWaterCoralReefs2017_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ColdWaterCoralReefs2017_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColdWaterCoralReefs2017_81.addFeatures(features_ColdWaterCoralReefs2017_81);
var lyr_ColdWaterCoralReefs2017_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColdWaterCoralReefs2017_81, 
                style: style_ColdWaterCoralReefs2017_81,
                popuplayertitle: 'Cold-Water Coral Reefs 2017',
                interactive: true,
                title: '<img src="styles/legend/ColdWaterCoralReefs2017_81.png" /> Cold-Water Coral Reefs 2017'
            });
var format_CoralReefs_82 = new ol.format.GeoJSON();
var features_CoralReefs_82 = format_CoralReefs_82.readFeatures(json_CoralReefs_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoralReefs_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoralReefs_82.addFeatures(features_CoralReefs_82);
var lyr_CoralReefs_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoralReefs_82, 
                style: style_CoralReefs_82,
                popuplayertitle: 'Coral Reefs',
                interactive: false,
                title: '<img src="styles/legend/CoralReefs_82.png" /> Coral Reefs'
            });
var format_ImportantSharkandRayAreas_83 = new ol.format.GeoJSON();
var features_ImportantSharkandRayAreas_83 = format_ImportantSharkandRayAreas_83.readFeatures(json_ImportantSharkandRayAreas_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ImportantSharkandRayAreas_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImportantSharkandRayAreas_83.addFeatures(features_ImportantSharkandRayAreas_83);
var lyr_ImportantSharkandRayAreas_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImportantSharkandRayAreas_83, 
                style: style_ImportantSharkandRayAreas_83,
                popuplayertitle: 'Important Shark and Ray Areas',
                interactive: false,
                title: '<img src="styles/legend/ImportantSharkandRayAreas_83.png" /> Important Shark and Ray Areas'
            });
var format_SeagrassPolygons_84 = new ol.format.GeoJSON();
var features_SeagrassPolygons_84 = format_SeagrassPolygons_84.readFeatures(json_SeagrassPolygons_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SeagrassPolygons_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeagrassPolygons_84.addFeatures(features_SeagrassPolygons_84);
var lyr_SeagrassPolygons_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeagrassPolygons_84, 
                style: style_SeagrassPolygons_84,
                popuplayertitle: 'Seagrass Polygons',
                interactive: false,
                title: '<img src="styles/legend/SeagrassPolygons_84.png" /> Seagrass Polygons'
            });
var format_SeagrassPoints_85 = new ol.format.GeoJSON();
var features_SeagrassPoints_85 = format_SeagrassPoints_85.readFeatures(json_SeagrassPoints_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SeagrassPoints_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeagrassPoints_85.addFeatures(features_SeagrassPoints_85);
var lyr_SeagrassPoints_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeagrassPoints_85, 
                style: style_SeagrassPoints_85,
                popuplayertitle: 'Seagrass Points',
                interactive: true,
                title: '<img src="styles/legend/SeagrassPoints_85.png" /> Seagrass Points'
            });
var format_ImportantBirdAreas_86 = new ol.format.GeoJSON();
var features_ImportantBirdAreas_86 = format_ImportantBirdAreas_86.readFeatures(json_ImportantBirdAreas_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ImportantBirdAreas_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImportantBirdAreas_86.addFeatures(features_ImportantBirdAreas_86);
var lyr_ImportantBirdAreas_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImportantBirdAreas_86, 
                style: style_ImportantBirdAreas_86,
                popuplayertitle: 'Important Bird Areas',
                interactive: true,
                title: '<img src="styles/legend/ImportantBirdAreas_86.png" /> Important Bird Areas'
            });
var format_TurtleNestingSites_87 = new ol.format.GeoJSON();
var features_TurtleNestingSites_87 = format_TurtleNestingSites_87.readFeatures(json_TurtleNestingSites_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TurtleNestingSites_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TurtleNestingSites_87.addFeatures(features_TurtleNestingSites_87);
var lyr_TurtleNestingSites_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TurtleNestingSites_87, 
                style: style_TurtleNestingSites_87,
                popuplayertitle: 'Turtle Nesting Sites',
                interactive: true,
                title: '<img src="styles/legend/TurtleNestingSites_87.png" /> Turtle Nesting Sites'
            });
var format_Deforestation_geonode_20160623_88 = new ol.format.GeoJSON();
var features_Deforestation_geonode_20160623_88 = format_Deforestation_geonode_20160623_88.readFeatures(json_Deforestation_geonode_20160623_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_geonode_20160623_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_geonode_20160623_88.addFeatures(features_Deforestation_geonode_20160623_88);
var lyr_Deforestation_geonode_20160623_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_geonode_20160623_88, 
                style: style_Deforestation_geonode_20160623_88,
                popuplayertitle: 'Deforestation_geonode_20160623',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_geonode_20160623_88.png" /> Deforestation_geonode_20160623'
            });
var format_Deforestation_2023_89 = new ol.format.GeoJSON();
var features_Deforestation_2023_89 = format_Deforestation_2023_89.readFeatures(json_Deforestation_2023_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2023_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2023_89.addFeatures(features_Deforestation_2023_89);
var lyr_Deforestation_2023_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2023_89, 
                style: style_Deforestation_2023_89,
                popuplayertitle: 'Deforestation_2023',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2023_89.png" /> Deforestation_2023'
            });
var format_Deforestation_2022_90 = new ol.format.GeoJSON();
var features_Deforestation_2022_90 = format_Deforestation_2022_90.readFeatures(json_Deforestation_2022_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2022_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2022_90.addFeatures(features_Deforestation_2022_90);
var lyr_Deforestation_2022_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2022_90, 
                style: style_Deforestation_2022_90,
                popuplayertitle: 'Deforestation_2022',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2022_90.png" /> Deforestation_2022'
            });
var format_Deforestation_2021_91 = new ol.format.GeoJSON();
var features_Deforestation_2021_91 = format_Deforestation_2021_91.readFeatures(json_Deforestation_2021_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2021_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2021_91.addFeatures(features_Deforestation_2021_91);
var lyr_Deforestation_2021_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2021_91, 
                style: style_Deforestation_2021_91,
                popuplayertitle: 'Deforestation_2021',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2021_91.png" /> Deforestation_2021'
            });
var format_Deforestation_2020_92 = new ol.format.GeoJSON();
var features_Deforestation_2020_92 = format_Deforestation_2020_92.readFeatures(json_Deforestation_2020_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2020_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2020_92.addFeatures(features_Deforestation_2020_92);
var lyr_Deforestation_2020_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2020_92, 
                style: style_Deforestation_2020_92,
                popuplayertitle: 'Deforestation_2020',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2020_92.png" /> Deforestation_2020'
            });
var format_Deforestation_2019_93 = new ol.format.GeoJSON();
var features_Deforestation_2019_93 = format_Deforestation_2019_93.readFeatures(json_Deforestation_2019_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2019_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2019_93.addFeatures(features_Deforestation_2019_93);
var lyr_Deforestation_2019_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2019_93, 
                style: style_Deforestation_2019_93,
                popuplayertitle: 'Deforestation_2019',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2019_93.png" /> Deforestation_2019'
            });
var format_Deforestation_2018_94 = new ol.format.GeoJSON();
var features_Deforestation_2018_94 = format_Deforestation_2018_94.readFeatures(json_Deforestation_2018_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2018_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2018_94.addFeatures(features_Deforestation_2018_94);
var lyr_Deforestation_2018_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2018_94, 
                style: style_Deforestation_2018_94,
                popuplayertitle: 'Deforestation_2018',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2018_94.png" /> Deforestation_2018'
            });
var format_Deforestation_2017_95 = new ol.format.GeoJSON();
var features_Deforestation_2017_95 = format_Deforestation_2017_95.readFeatures(json_Deforestation_2017_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deforestation_2017_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestation_2017_95.addFeatures(features_Deforestation_2017_95);
var lyr_Deforestation_2017_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestation_2017_95, 
                style: style_Deforestation_2017_95,
                popuplayertitle: 'Deforestation_2017',
                interactive: false,
                title: '<img src="styles/legend/Deforestation_2017_95.png" /> Deforestation_2017'
            });
var format_Soil_96 = new ol.format.GeoJSON();
var features_Soil_96 = format_Soil_96.readFeatures(json_Soil_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Soil_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soil_96.addFeatures(features_Soil_96);
var lyr_Soil_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Soil_96, 
                style: style_Soil_96,
                popuplayertitle: 'Soil',
                interactive: true,
    title: 'Soil<br />\
    <img src="styles/legend/Soil_96_0.png" /> Lagos,lagoas ou rios<br />\
    <img src="styles/legend/Soil_96_1.png" /> Solos arenosos alaranjados fase dunar<br />\
    <img src="styles/legend/Soil_96_2.png" /> Solos arenosos hidromorficos<br />\
    <img src="styles/legend/Soil_96_3.png" /> Solos arenosos hidronorficos<br />\
    <img src="styles/legend/Soil_96_4.png" /> Solos arenosos nao especificados<br />\
    <img src="styles/legend/Soil_96_5.png" /> Solos arenosos, fase dunar<br />\
    <img src="styles/legend/Soil_96_6.png" /> Solos argilosos vermelhos dervados de rochas calca<br />\
    <img src="styles/legend/Soil_96_7.png" /> Solos de aluvioes argilosos<br />\
    <img src="styles/legend/Soil_96_8.png" /> Solos de aluvioes estratificados de textura grossa<br />\
    <img src="styles/legend/Soil_96_9.png" /> Solos de aluvioes turfosos<br />\
    <img src="styles/legend/Soil_96_10.png" /> Solos de coluvioes argilosos de mananga<br />\
    <img src="styles/legend/Soil_96_11.png" /> Solos de dunas coseiras<br />\
    <img src="styles/legend/Soil_96_12.png" /> Solos de mananga com cobertura arenosa de esp vari<br />\
    <img src="styles/legend/Soil_96_13.png" /> Solos de Post_managa com textura media<br />\
    <img src="styles/legend/Soil_96_14.png" /> Solos de Post_mananga com textura grossa<br />\
    <img src="styles/legend/Soil_96_15.png" /> Solos de post_mananga com textura media<br />\
    <img src="styles/legend/Soil_96_16.png" /> Solos de sedimentos marinhos estuarinos<br />\
    <img src="styles/legend/Soil_96_17.png" /> Solos pouco profundos sobre rocha calcaria<br />' });
var format_Geology_97 = new ol.format.GeoJSON();
var features_Geology_97 = format_Geology_97.readFeatures(json_Geology_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Geology_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_97.addFeatures(features_Geology_97);
var lyr_Geology_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_97, 
                style: style_Geology_97,
                popuplayertitle: 'Geology',
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_97_0.png" /> aluvires<br />\
    <img src="styles/legend/Geology_97_1.png" /> arenitos ,argilas e rochas afins<br />\
    <img src="styles/legend/Geology_97_2.png" /> Deptsitos indiferenciados<br />\
    <img src="styles/legend/Geology_97_3.png" /> rochas carbonatadas<br />\
    <img src="styles/legend/Geology_97_4.png" /> terraros<br />' });
var format_Erosion_98 = new ol.format.GeoJSON();
var features_Erosion_98 = format_Erosion_98.readFeatures(json_Erosion_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Erosion_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erosion_98.addFeatures(features_Erosion_98);
var lyr_Erosion_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erosion_98, 
                style: style_Erosion_98,
                popuplayertitle: 'Erosion',
                interactive: true,
    title: 'Erosion<br />\
    <img src="styles/legend/Erosion_98_0.png" /> Baixo<br />\
    <img src="styles/legend/Erosion_98_1.png" /> Madio<br />' });
var format_Healthfacilitiespolygons_99 = new ol.format.GeoJSON();
var features_Healthfacilitiespolygons_99 = format_Healthfacilitiespolygons_99.readFeatures(json_Healthfacilitiespolygons_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Healthfacilitiespolygons_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilitiespolygons_99.addFeatures(features_Healthfacilitiespolygons_99);
var lyr_Healthfacilitiespolygons_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilitiespolygons_99, 
                style: style_Healthfacilitiespolygons_99,
                popuplayertitle: 'Health facilities polygons',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilitiespolygons_99.png" /> Health facilities polygons'
            });
var format_Healthfacilitiespoints_100 = new ol.format.GeoJSON();
var features_Healthfacilitiespoints_100 = format_Healthfacilitiespoints_100.readFeatures(json_Healthfacilitiespoints_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Healthfacilitiespoints_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilitiespoints_100.addFeatures(features_Healthfacilitiespoints_100);
var lyr_Healthfacilitiespoints_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilitiespoints_100, 
                style: style_Healthfacilitiespoints_100,
                popuplayertitle: 'Health facilities points',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilitiespoints_100.png" /> Health facilities points'
            });
var format_Healthfacilities_1_101 = new ol.format.GeoJSON();
var features_Healthfacilities_1_101 = format_Healthfacilities_1_101.readFeatures(json_Healthfacilities_1_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Healthfacilities_1_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilities_1_101.addFeatures(features_Healthfacilities_1_101);
var lyr_Healthfacilities_1_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilities_1_101, 
                style: style_Healthfacilities_1_101,
                popuplayertitle: 'Health facilities_1',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilities_1_101.png" /> Health facilities_1'
            });
var format_HealthFacilities_102 = new ol.format.GeoJSON();
var features_HealthFacilities_102 = format_HealthFacilities_102.readFeatures(json_HealthFacilities_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HealthFacilities_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilities_102.addFeatures(features_HealthFacilities_102);
var lyr_HealthFacilities_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilities_102, 
                style: style_HealthFacilities_102,
                popuplayertitle: 'Health Facilities',
                interactive: true,
                title: '<img src="styles/legend/HealthFacilities_102.png" /> Health Facilities'
            });
var format_Schools_103 = new ol.format.GeoJSON();
var features_Schools_103 = format_Schools_103.readFeatures(json_Schools_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Schools_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_103.addFeatures(features_Schools_103);
var lyr_Schools_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_103, 
                style: style_Schools_103,
                popuplayertitle: 'Schools',
                interactive: true,
                title: '<img src="styles/legend/Schools_103.png" /> Schools'
            });
var format_TertiarySchools_104 = new ol.format.GeoJSON();
var features_TertiarySchools_104 = format_TertiarySchools_104.readFeatures(json_TertiarySchools_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TertiarySchools_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TertiarySchools_104.addFeatures(features_TertiarySchools_104);
var lyr_TertiarySchools_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TertiarySchools_104, 
                style: style_TertiarySchools_104,
                popuplayertitle: 'Tertiary Schools',
                interactive: true,
                title: '<img src="styles/legend/TertiarySchools_104.png" /> Tertiary Schools'
            });
var format_SecondarySchools_105 = new ol.format.GeoJSON();
var features_SecondarySchools_105 = format_SecondarySchools_105.readFeatures(json_SecondarySchools_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SecondarySchools_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecondarySchools_105.addFeatures(features_SecondarySchools_105);
var lyr_SecondarySchools_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecondarySchools_105, 
                style: style_SecondarySchools_105,
                popuplayertitle: 'Secondary Schools',
                interactive: true,
                title: '<img src="styles/legend/SecondarySchools_105.png" /> Secondary Schools'
            });
var format_PrimarySchools_106 = new ol.format.GeoJSON();
var features_PrimarySchools_106 = format_PrimarySchools_106.readFeatures(json_PrimarySchools_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PrimarySchools_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimarySchools_106.addFeatures(features_PrimarySchools_106);
var lyr_PrimarySchools_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimarySchools_106, 
                style: style_PrimarySchools_106,
                popuplayertitle: 'Primary Schools',
                interactive: true,
                title: '<img src="styles/legend/PrimarySchools_106.png" /> Primary Schools'
            });
var format_LimitesCosteiros_107 = new ol.format.GeoJSON();
var features_LimitesCosteiros_107 = format_LimitesCosteiros_107.readFeatures(json_LimitesCosteiros_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimitesCosteiros_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesCosteiros_107.addFeatures(features_LimitesCosteiros_107);
var lyr_LimitesCosteiros_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesCosteiros_107, 
                style: style_LimitesCosteiros_107,
                popuplayertitle: 'Limites Costeiros',
                interactive: true,
                title: '<img src="styles/legend/LimitesCosteiros_107.png" /> Limites Costeiros'
            });
var format_ExclusiveEconomicZone_108 = new ol.format.GeoJSON();
var features_ExclusiveEconomicZone_108 = format_ExclusiveEconomicZone_108.readFeatures(json_ExclusiveEconomicZone_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ExclusiveEconomicZone_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExclusiveEconomicZone_108.addFeatures(features_ExclusiveEconomicZone_108);
var lyr_ExclusiveEconomicZone_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExclusiveEconomicZone_108, 
                style: style_ExclusiveEconomicZone_108,
                popuplayertitle: 'Exclusive Economic Zone',
                interactive: true,
                title: '<img src="styles/legend/ExclusiveEconomicZone_108.png" /> Exclusive Economic Zone'
            });
var format_Concessoesflorestais_109 = new ol.format.GeoJSON();
var features_Concessoesflorestais_109 = format_Concessoesflorestais_109.readFeatures(json_Concessoesflorestais_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Concessoesflorestais_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concessoesflorestais_109.addFeatures(features_Concessoesflorestais_109);
var lyr_Concessoesflorestais_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Concessoesflorestais_109, 
                style: style_Concessoesflorestais_109,
                popuplayertitle: 'Concessoes florestais',
                interactive: true,
                title: '<img src="styles/legend/Concessoesflorestais_109.png" /> Concessoes florestais'
            });
var format_LakesandFloodedAreas_110 = new ol.format.GeoJSON();
var features_LakesandFloodedAreas_110 = format_LakesandFloodedAreas_110.readFeatures(json_LakesandFloodedAreas_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LakesandFloodedAreas_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LakesandFloodedAreas_110.addFeatures(features_LakesandFloodedAreas_110);
var lyr_LakesandFloodedAreas_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LakesandFloodedAreas_110, 
                style: style_LakesandFloodedAreas_110,
                popuplayertitle: 'Lakes and Flooded Areas',
                interactive: true,
                title: '<img src="styles/legend/LakesandFloodedAreas_110.png" /> Lakes and Flooded Areas'
            });
var format_Waterwayspolygons_111 = new ol.format.GeoJSON();
var features_Waterwayspolygons_111 = format_Waterwayspolygons_111.readFeatures(json_Waterwayspolygons_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waterwayspolygons_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterwayspolygons_111.addFeatures(features_Waterwayspolygons_111);
var lyr_Waterwayspolygons_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterwayspolygons_111, 
                style: style_Waterwayspolygons_111,
                popuplayertitle: 'Waterways polygons',
                interactive: true,
                title: '<img src="styles/legend/Waterwayspolygons_111.png" /> Waterways polygons'
            });
var format_Waterwayslines_112 = new ol.format.GeoJSON();
var features_Waterwayslines_112 = format_Waterwayslines_112.readFeatures(json_Waterwayslines_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waterwayslines_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterwayslines_112.addFeatures(features_Waterwayslines_112);
var lyr_Waterwayslines_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterwayslines_112, 
                style: style_Waterwayslines_112,
                popuplayertitle: 'Waterways lines',
                interactive: true,
                title: '<img src="styles/legend/Waterwayslines_112.png" /> Waterways lines'
            });
var format_CoastlineHydrology1250K_113 = new ol.format.GeoJSON();
var features_CoastlineHydrology1250K_113 = format_CoastlineHydrology1250K_113.readFeatures(json_CoastlineHydrology1250K_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoastlineHydrology1250K_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastlineHydrology1250K_113.addFeatures(features_CoastlineHydrology1250K_113);
var lyr_CoastlineHydrology1250K_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastlineHydrology1250K_113, 
                style: style_CoastlineHydrology1250K_113,
                popuplayertitle: 'Coastline Hydrology 1:250K',
                interactive: true,
                title: '<img src="styles/legend/CoastlineHydrology1250K_113.png" /> Coastline Hydrology 1:250K'
            });
var format_Rios_114 = new ol.format.GeoJSON();
var features_Rios_114 = format_Rios_114.readFeatures(json_Rios_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rios_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_114.addFeatures(features_Rios_114);
var lyr_Rios_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_114, 
                style: style_Rios_114,
                popuplayertitle: 'Rios',
                interactive: true,
                title: '<img src="styles/legend/Rios_114.png" /> Rios'
            });
var format_DrainageBasin_1_115 = new ol.format.GeoJSON();
var features_DrainageBasin_1_115 = format_DrainageBasin_1_115.readFeatures(json_DrainageBasin_1_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DrainageBasin_1_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainageBasin_1_115.addFeatures(features_DrainageBasin_1_115);
var lyr_DrainageBasin_1_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainageBasin_1_115, 
                style: style_DrainageBasin_1_115,
                popuplayertitle: 'Drainage Basin_1',
                interactive: true,
                title: '<img src="styles/legend/DrainageBasin_1_115.png" /> Drainage Basin_1'
            });
var format_DrainageBasin_116 = new ol.format.GeoJSON();
var features_DrainageBasin_116 = format_DrainageBasin_116.readFeatures(json_DrainageBasin_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DrainageBasin_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainageBasin_116.addFeatures(features_DrainageBasin_116);
var lyr_DrainageBasin_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainageBasin_116, 
                style: style_DrainageBasin_116,
                popuplayertitle: 'Drainage Basin',
                interactive: true,
                title: '<img src="styles/legend/DrainageBasin_116.png" /> Drainage Basin'
            });
var format_Bathymetry_117 = new ol.format.GeoJSON();
var features_Bathymetry_117 = format_Bathymetry_117.readFeatures(json_Bathymetry_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bathymetry_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bathymetry_117.addFeatures(features_Bathymetry_117);
var lyr_Bathymetry_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bathymetry_117, 
                style: style_Bathymetry_117,
                popuplayertitle: 'Bathymetry',
                interactive: true,
                title: '<img src="styles/legend/Bathymetry_117.png" /> Bathymetry'
            });
var format_ExclusiveEconomicZone_118 = new ol.format.GeoJSON();
var features_ExclusiveEconomicZone_118 = format_ExclusiveEconomicZone_118.readFeatures(json_ExclusiveEconomicZone_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ExclusiveEconomicZone_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExclusiveEconomicZone_118.addFeatures(features_ExclusiveEconomicZone_118);
var lyr_ExclusiveEconomicZone_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExclusiveEconomicZone_118, 
                style: style_ExclusiveEconomicZone_118,
                popuplayertitle: 'Exclusive Economic Zone',
                interactive: false,
                title: '<img src="styles/legend/ExclusiveEconomicZone_118.png" /> Exclusive Economic Zone'
            });
var format_EnergyInfrastructure_119 = new ol.format.GeoJSON();
var features_EnergyInfrastructure_119 = format_EnergyInfrastructure_119.readFeatures(json_EnergyInfrastructure_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EnergyInfrastructure_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnergyInfrastructure_119.addFeatures(features_EnergyInfrastructure_119);
var lyr_EnergyInfrastructure_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnergyInfrastructure_119, 
                style: style_EnergyInfrastructure_119,
                popuplayertitle: 'Energy Infrastructure',
                interactive: true,
                title: '<img src="styles/legend/EnergyInfrastructure_119.png" /> Energy Infrastructure'
            });
var group_Energy = new ol.layer.Group({
                                layers: [lyr_EnergyInfrastructure_119,],
                                fold: 'close',
                                title: 'Energy'});
var group_HydrologyOceanography = new ol.layer.Group({
                                layers: [lyr_LimitesCosteiros_107,lyr_ExclusiveEconomicZone_108,lyr_Concessoesflorestais_109,lyr_LakesandFloodedAreas_110,lyr_Waterwayspolygons_111,lyr_Waterwayslines_112,lyr_CoastlineHydrology1250K_113,lyr_Rios_114,lyr_DrainageBasin_1_115,lyr_DrainageBasin_116,lyr_Bathymetry_117,lyr_ExclusiveEconomicZone_118,],
                                fold: 'close',
                                title: 'Hydrology & Oceanography'});
var group_Education = new ol.layer.Group({
                                layers: [lyr_Schools_103,lyr_TertiarySchools_104,lyr_SecondarySchools_105,lyr_PrimarySchools_106,],
                                fold: 'close',
                                title: 'Education'});
var group_Health = new ol.layer.Group({
                                layers: [lyr_Healthfacilitiespolygons_99,lyr_Healthfacilitiespoints_100,lyr_Healthfacilities_1_101,lyr_HealthFacilities_102,],
                                fold: 'close',
                                title: 'Health'});
var group_GeologySoil = new ol.layer.Group({
                                layers: [lyr_Soil_96,lyr_Geology_97,lyr_Erosion_98,],
                                fold: 'close',
                                title: 'Geology & Soil'});
var group_LandUseEnvironment = new ol.layer.Group({
                                layers: [lyr_Deforestation_geonode_20160623_88,lyr_Deforestation_2023_89,lyr_Deforestation_2022_90,lyr_Deforestation_2021_91,lyr_Deforestation_2020_92,lyr_Deforestation_2019_93,lyr_Deforestation_2018_94,lyr_Deforestation_2017_95,],
                                fold: 'close',
                                title: 'Land Use & Environment'});
var group_EnvironmentBiodiversity = new ol.layer.Group({
                                layers: [lyr_EcoregionsBiomes_39,lyr_Ecoregions_40,lyr_AgroEcologicalZones_41,lyr_Flora_42,lyr_FreshwaterEcoregions_43,lyr_MarineEcoregions_44,lyr_TerrestrialEcoregions_45,lyr_ConservationAreas_46,lyr_ReservasNacionais_47,lyr_ThreatenedorCriticalEcosystems_48,lyr_AreasofEndemism_49,lyr_AreasofHighScientificValue_50,lyr_MigratorySpeciesHabitat_51,lyr_GlobalCoralReefs_52,lyr_MarineHabitatsandCorals_53,lyr_DugongHabitats_54,lyr_AreasofKeyEvolutionaryProcesses_55,lyr_EndemicSpeciesHabitats_56,lyr_IFCHabitatCategories_57,lyr_KeyBiodiversityAreas_58,lyr_MarineHabitats_59,lyr_MozambiqueMangroves_60,lyr_MangrovesWWF2018_61,lyr_MangrovesUEM2013_62,lyr_MangrovesRCMDR2015_63,lyr_MangrovesDIRF_64,lyr_Mangroves2020_65,lyr_Mangroves2019_66,lyr_Mangroves2018_67,lyr_Mangroves2017_68,lyr_Mangroves2016_69,lyr_Mangroves2015_70,lyr_Mangroves2010_71,lyr_Mangroves2009_72,lyr_Mangroves2008_73,lyr_Mangroves2007_74,lyr_Mangroves1996_75,lyr_BiodiversityHotspots_76,lyr_SaltmarshDistribution_77,lyr_SeagrassPolygons_78,lyr_MozambiqueCoralReefs_79,lyr_WarmWaterCoralReefs2018_80,lyr_ColdWaterCoralReefs2017_81,lyr_CoralReefs_82,lyr_ImportantSharkandRayAreas_83,lyr_SeagrassPolygons_84,lyr_SeagrassPoints_85,lyr_ImportantBirdAreas_86,lyr_TurtleNestingSites_87,],
                                fold: 'close',
                                title: 'Environment & Biodiversity'});
var group_ResourcesEconomy = new ol.layer.Group({
                                layers: [lyr_HydrocarbonConcessions_2_33,lyr_HydrocarbonConcessions_1_34,lyr_MiningConcessions2018_35,lyr_MiningConcessions2011_36,lyr_MiningConcessions2006_37,lyr_FreshwaterAquaculturePotentialDistricts_38,],
                                fold: 'close',
                                title: 'Resources & Economy'});
var group_ClimateMeteorology = new ol.layer.Group({
                                layers: [lyr_ClimateTypes_31,lyr_KppenClimateClassification_32,],
                                fold: 'close',
                                title: 'Climate & Meteorology'});
var group_EnvironmentResources = new ol.layer.Group({
                                layers: [lyr_MarineAquaculturePotentialDistricts_29,lyr_UpperGroundwaterAquifers_30,],
                                fold: 'close',
                                title: 'Environment & Resources'});
var group_InfrastructureTransport = new ol.layer.Group({
                                layers: [lyr_Airportspolygons_18,lyr_Airportslines_19,lyr_Roads_1_20,lyr_Roads_21,lyr_Seaportslines_22,lyr_Seaportspoints_23,lyr_Ports_24,lyr_TransportationUseRoads_25,lyr_Airportspoints_26,lyr_TelecommunicationTowers_27,lyr_Pointsofinterest_28,],
                                fold: 'close',
                                title: 'Infrastructure & Transport'});
var group_EconomyServices = new ol.layer.Group({
                                layers: [lyr_Financialservicespoints_15,lyr_Fishingcenters_16,lyr_Poverty_17,],
                                fold: 'close',
                                title: 'Economy & Services'});
var group_SettlementsUrbanization = new ol.layer.Group({
                                layers: [lyr_Populatedplacespolygons_11,lyr_PopulatedPlacesPoints_12,lyr_MajorCities_13,lyr_Villages_14,],
                                fold: 'close',
                                title: 'Settlements & Urbanization'});
var group_RiskDisaster = new ol.layer.Group({
                                layers: [lyr_NaturalHazardAreas_10,],
                                fold: 'close',
                                title: 'Risk & Disaster'});
var group_Demographics = new ol.layer.Group({
                                layers: [lyr_PopulationDistribution2025_6,lyr_PopulationDistribution2024_7,lyr_MOZ_population_v1_1_gridded_8,lyr_Settlements_9,],
                                fold: 'close',
                                title: 'Demographics'});
var group_AdministrationGovernance = new ol.layer.Group({
                                layers: [lyr_Provinces_1,lyr_CoastalDistricts_2,lyr_AdministrativePosts_3,lyr_Bairros_aldeias_localidades_4,lyr_Inhambaneprovinceboundaries_5,],
                                fold: 'close',
                                title: 'Administration & Governance'});

lyr_OSMStandard_0.setVisible(true);lyr_Provinces_1.setVisible(true);lyr_CoastalDistricts_2.setVisible(false);lyr_AdministrativePosts_3.setVisible(true);lyr_Bairros_aldeias_localidades_4.setVisible(true);lyr_Inhambaneprovinceboundaries_5.setVisible(false);lyr_PopulationDistribution2025_6.setVisible(false);lyr_PopulationDistribution2024_7.setVisible(false);lyr_MOZ_population_v1_1_gridded_8.setVisible(false);lyr_Settlements_9.setVisible(true);lyr_NaturalHazardAreas_10.setVisible(false);lyr_Populatedplacespolygons_11.setVisible(false);lyr_PopulatedPlacesPoints_12.setVisible(false);lyr_MajorCities_13.setVisible(false);lyr_Villages_14.setVisible(false);lyr_Financialservicespoints_15.setVisible(false);lyr_Fishingcenters_16.setVisible(false);lyr_Poverty_17.setVisible(false);lyr_Airportspolygons_18.setVisible(false);lyr_Airportslines_19.setVisible(false);lyr_Roads_1_20.setVisible(false);lyr_Roads_21.setVisible(false);lyr_Seaportslines_22.setVisible(false);lyr_Seaportspoints_23.setVisible(false);lyr_Ports_24.setVisible(false);lyr_TransportationUseRoads_25.setVisible(false);lyr_Airportspoints_26.setVisible(false);lyr_TelecommunicationTowers_27.setVisible(false);lyr_Pointsofinterest_28.setVisible(false);lyr_MarineAquaculturePotentialDistricts_29.setVisible(false);lyr_UpperGroundwaterAquifers_30.setVisible(false);lyr_ClimateTypes_31.setVisible(false);lyr_KppenClimateClassification_32.setVisible(false);lyr_HydrocarbonConcessions_2_33.setVisible(false);lyr_HydrocarbonConcessions_1_34.setVisible(false);lyr_MiningConcessions2018_35.setVisible(false);lyr_MiningConcessions2011_36.setVisible(false);lyr_MiningConcessions2006_37.setVisible(false);lyr_FreshwaterAquaculturePotentialDistricts_38.setVisible(false);lyr_EcoregionsBiomes_39.setVisible(false);lyr_Ecoregions_40.setVisible(false);lyr_AgroEcologicalZones_41.setVisible(false);lyr_Flora_42.setVisible(false);lyr_FreshwaterEcoregions_43.setVisible(false);lyr_MarineEcoregions_44.setVisible(false);lyr_TerrestrialEcoregions_45.setVisible(false);lyr_ConservationAreas_46.setVisible(true);lyr_ReservasNacionais_47.setVisible(true);lyr_ThreatenedorCriticalEcosystems_48.setVisible(false);lyr_AreasofEndemism_49.setVisible(false);lyr_AreasofHighScientificValue_50.setVisible(false);lyr_MigratorySpeciesHabitat_51.setVisible(false);lyr_GlobalCoralReefs_52.setVisible(false);lyr_MarineHabitatsandCorals_53.setVisible(false);lyr_DugongHabitats_54.setVisible(false);lyr_AreasofKeyEvolutionaryProcesses_55.setVisible(false);lyr_EndemicSpeciesHabitats_56.setVisible(false);lyr_IFCHabitatCategories_57.setVisible(true);lyr_KeyBiodiversityAreas_58.setVisible(true);lyr_MarineHabitats_59.setVisible(false);lyr_MozambiqueMangroves_60.setVisible(false);lyr_MangrovesWWF2018_61.setVisible(false);lyr_MangrovesUEM2013_62.setVisible(false);lyr_MangrovesRCMDR2015_63.setVisible(false);lyr_MangrovesDIRF_64.setVisible(false);lyr_Mangroves2020_65.setVisible(false);lyr_Mangroves2019_66.setVisible(false);lyr_Mangroves2018_67.setVisible(false);lyr_Mangroves2017_68.setVisible(false);lyr_Mangroves2016_69.setVisible(false);lyr_Mangroves2015_70.setVisible(false);lyr_Mangroves2010_71.setVisible(false);lyr_Mangroves2009_72.setVisible(false);lyr_Mangroves2008_73.setVisible(false);lyr_Mangroves2007_74.setVisible(false);lyr_Mangroves1996_75.setVisible(false);lyr_BiodiversityHotspots_76.setVisible(true);lyr_SaltmarshDistribution_77.setVisible(false);lyr_SeagrassPolygons_78.setVisible(false);lyr_MozambiqueCoralReefs_79.setVisible(false);lyr_WarmWaterCoralReefs2018_80.setVisible(false);lyr_ColdWaterCoralReefs2017_81.setVisible(false);lyr_CoralReefs_82.setVisible(false);lyr_ImportantSharkandRayAreas_83.setVisible(false);lyr_SeagrassPolygons_84.setVisible(false);lyr_SeagrassPoints_85.setVisible(false);lyr_ImportantBirdAreas_86.setVisible(false);lyr_TurtleNestingSites_87.setVisible(false);lyr_Deforestation_geonode_20160623_88.setVisible(false);lyr_Deforestation_2023_89.setVisible(false);lyr_Deforestation_2022_90.setVisible(false);lyr_Deforestation_2021_91.setVisible(false);lyr_Deforestation_2020_92.setVisible(false);lyr_Deforestation_2019_93.setVisible(false);lyr_Deforestation_2018_94.setVisible(false);lyr_Deforestation_2017_95.setVisible(false);lyr_Soil_96.setVisible(false);lyr_Geology_97.setVisible(false);lyr_Erosion_98.setVisible(false);lyr_Healthfacilitiespolygons_99.setVisible(false);lyr_Healthfacilitiespoints_100.setVisible(false);lyr_Healthfacilities_1_101.setVisible(false);lyr_HealthFacilities_102.setVisible(false);lyr_Schools_103.setVisible(false);lyr_TertiarySchools_104.setVisible(false);lyr_SecondarySchools_105.setVisible(false);lyr_PrimarySchools_106.setVisible(false);lyr_LimitesCosteiros_107.setVisible(true);lyr_ExclusiveEconomicZone_108.setVisible(false);lyr_Concessoesflorestais_109.setVisible(false);lyr_LakesandFloodedAreas_110.setVisible(false);lyr_Waterwayspolygons_111.setVisible(false);lyr_Waterwayslines_112.setVisible(false);lyr_CoastlineHydrology1250K_113.setVisible(false);lyr_Rios_114.setVisible(false);lyr_DrainageBasin_1_115.setVisible(false);lyr_DrainageBasin_116.setVisible(false);lyr_Bathymetry_117.setVisible(false);lyr_ExclusiveEconomicZone_118.setVisible(false);lyr_EnergyInfrastructure_119.setVisible(false);
var layersList = [lyr_OSMStandard_0,group_AdministrationGovernance,group_Demographics,group_RiskDisaster,group_SettlementsUrbanization,group_EconomyServices,group_InfrastructureTransport,group_EnvironmentResources,group_ClimateMeteorology,group_ResourcesEconomy,group_EnvironmentBiodiversity,group_LandUseEnvironment,group_GeologySoil,group_Health,group_Education,group_HydrologyOceanography,group_Energy];
lyr_Provinces_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ADM1_PT': 'ADM1_PT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CoastalDistricts_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DISTRITO': 'DISTRITO', 'Shape_Leng': 'Shape_Leng', 'País': 'País', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AdministrativePosts_3.set('fieldAliases', {'fid': 'fid', 'ADM3_PT': 'ADM3_PT', 'ADM2_PT': 'ADM2_PT', 'ADM1_PT': 'ADM1_PT', 'ADM0_PT': 'ADM0_PT', });
lyr_Bairros_aldeias_localidades_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'CodProv': 'CodProv', 'Provincia': 'Provincia', 'CodDist': 'CodDist', 'Distrito': 'Distrito', 'CodPost': 'CodPost', 'Posto': 'Posto', 'CodLocal': 'CodLocal', 'Localidade': 'Localidade', 'CodBairro': 'CodBairro', 'Bairro': 'Bairro', 'TOTAL': 'TOTAL', 'H': 'H', 'M': 'M', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Inhambaneprovinceboundaries_5.set('fieldAliases', {'fid': 'fid', 'ADM1_PT': 'ADM1_PT', });
lyr_Settlements_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FID_1': 'FID_1', 'Sett_Name': 'Sett_Name', 'F_CLASS': 'F_CLASS', 'F_DESIG': 'F_DESIG', 'ADM1_Old': 'ADM1_Old', 'ADM2_Old': 'ADM2_Old', 'Country': 'Country', 'ISO3': 'ISO3', 'ADM1_Name': 'ADM1_Name', 'ADM1_Code': 'ADM1_Code', 'ADM1_ID': 'ADM1_ID', 'ADM2_Name': 'ADM2_Name', 'ADM2_Code': 'ADM2_Code', 'ADM2_ID': 'ADM2_ID', 'ADM3_Name': 'ADM3_Name', 'ADM3_Code': 'ADM3_Code', 'ADM3_ID': 'ADM3_ID', 'ADM3_Type': 'ADM3_Type', 'ADM3_TypeE': 'ADM3_TypeE', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NaturalHazardAreas_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRITO': 'DISTRITO', 'COPROV': 'COPROV', 'CODIS_Nbr': 'CODIS_Nbr', 'PROVINCIA': 'PROVINCIA', 'FloodClass': 'FloodClass', 'Dr_Class': 'Dr_Class', 'Cy_Class': 'Cy_Class', 'NS_Risk': 'NS_Risk', 'NS_Class': 'NS_Class', 'NS_Text': 'NS_Text', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Populatedplacespolygons_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'place': 'place', 'landuse': 'landuse', 'population': 'population', 'is_in': 'is_in', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PopulatedPlacesPoints_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'place': 'place', 'landuse': 'landuse', 'population': 'population', 'is_in': 'is_in', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_MajorCities_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TOP250G_': 'TOP250G_', 'TOP250G_ID': 'TOP250G_ID', 'TIPO_TOP': 'TIPO_TOP', 'TOPONIMO': 'TOPONIMO', 'ID_OPER': 'ID_OPER', });
lyr_Villages_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOME': 'NOME', 'TOTAL': 'TOTAL', 'MASCULINO': 'MASCULINO', 'FEMININO': 'FEMININO', 'AGREGADOS': 'AGREGADOS', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'CODIGO_CEN': 'CODIGO_CEN', });
lyr_Financialservicespoints_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'operator': 'operator', 'network': 'network', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Fishingcenters_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CENTROS_PE': 'CENTROS_PE', 'Y': 'Y', 'X': 'X', });
lyr_Poverty_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ADM250G_': 'ADM250G_', 'ADM250G_ID': 'ADM250G_ID', 'DISTRITO': 'DISTRITO', 'PROVINCIA': 'PROVINCIA', 'Num_Pobres': 'Num_Pobres', 'Pop_07': 'Pop_07', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Airportspolygons_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'aeroway': 'aeroway', 'building': 'building', 'emergency': 'emergency', 'emergency_': 'emergency_', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Airportslines_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'aeroway': 'aeroway', 'building': 'building', 'emergency': 'emergency', 'emergency_': 'emergency_', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', });
lyr_Roads_1_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ESTRADA': 'ESTRADA', 'ENOVA': 'ENOVA', 'PROV': 'PROV', 'TROçO': 'TROçO', 'SEQUêNCIA': 'SEQUêNCIA', 'DIST1': 'DIST1', 'S_FIC': 'S_FIC', 'COND': 'COND', 'CODE': 'CODE', 'MANUT96': 'MANUT96', 'TR94': 'TR94', 'SADC': 'SADC', 'C_VIAK': 'C_VIAK', 'D_PAIS': 'D_PAIS', 'T_VELHO': 'T_VELHO', 'LOCAL_I': 'LOCAL_I', 'LOCAL_F': 'LOCAL_F', 'NOD_I': 'NOD_I', 'NOD_F': 'NOD_F', 'CRUZ_I': 'CRUZ_I', 'CRUZ_F': 'CRUZ_F', 'LEVANTADO': 'LEVANTADO', 'TYPE': 'TYPE', 'ROADNO': 'ROADNO', 'PAVEDTYPE': 'PAVEDTYPE', 'ID': 'ID', 'NEWNO': 'NEWNO', 'ROAD_NAME': 'ROAD_NAME', 'REASON': 'REASON', 'PROVINCIA': 'PROVINCIA', 'OLDID': 'OLDID', 'OLDTYPE': 'OLDTYPE', 'UNCONTYPE': 'UNCONTYPE', 'UNCON_NAME': 'UNCON_NAME', 'LENGTH': 'LENGTH', 'TYPEQUAL': 'TYPEQUAL', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', });
lyr_Roads_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'osmid': 'osmid', 'name': 'name', 'highway': 'highway', 'ref': 'ref', 'country': 'country', 'city': 'city', 'street': 'street', 'oneway': 'oneway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'bridge': 'bridge', 'bicycle': 'bicycle', 'sidewalk': 'sidewalk', 'cycleway': 'cycleway', 'ford': 'ford', 'incline': 'incline', 'junction': 'junction', 'lit': 'lit', 'surface': 'surface', 'tracktype': 'tracktype', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', });
lyr_Seaportslines_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'port': 'port', 'operator_t': 'operator_t', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', });
lyr_Seaportspoints_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'port': 'port', 'operator_t': 'operator_t', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Ports_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TOP250G_': 'TOP250G_', 'TOP250G_ID': 'TOP250G_ID', 'TIPO_TOP': 'TIPO_TOP', 'TOPONIMO': 'TOPONIMO', 'ID_OPER': 'ID_OPER', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', });
lyr_TransportationUseRoads_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', 'Shape__Len': 'Shape__Len', 'Shape_Length': 'Shape_Length', });
lyr_Airportspoints_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'aeroway': 'aeroway', 'building': 'building', 'emergency': 'emergency', 'emergency_': 'emergency_', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_TelecommunicationTowers_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CELLNAME': 'CELLNAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'Provincia': 'Provincia', 'Distrito': 'Distrito', });
lyr_Pointsofinterest_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_MarineAquaculturePotentialDistricts_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DISTRITO': 'DISTRITO', 'Shape_Leng': 'Shape_Leng', 'País': 'País', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_UpperGroundwaterAquifers_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'AGUA_': 'AGUA_', 'CAPTA': 'CAPTA', 'CREA': 'CREA', 'SRMBOLO': 'SRMBOLO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ClimateTypes_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FIRST_SIMB': 'FIRST_SIMB', 'FIRST_TIPO': 'FIRST_TIPO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KppenClimateClassification_32.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FIRST_SIMB': 'FIRST_SIMB', 'FIRST_TIPO': 'FIRST_TIPO', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HydrocarbonConcessions_2_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'CONCE_NAME': 'CONCE_NAME', 'Area__ha_': 'Area__ha_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HydrocarbonConcessions_1_34.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Concession': 'Concession', 'OBJECTID_1': 'OBJECTID_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MiningConcessions2018_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Código': 'Código', 'Particip': 'Particip', 'Tipo': 'Tipo', 'Interess': 'Interess', 'Substânc': 'Substânc', 'Grupo_de': 'Grupo_de', 'Estado': 'Estado', 'Região': 'Região', 'Data_de_': 'Data_de_', 'Data_de1': 'Data_de1', 'Data_de2': 'Data_de2', 'Área': 'Área', 'Referênc': 'Referênc', 'guidShap': 'guidShap', 'guidLice': 'guidLice', 'PartName': 'PartName', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MiningConcessions2011_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'License': 'License', 'LicenseSuf': 'LicenseSuf', 'OldLicense': 'OldLicense', 'LicenseTyp': 'LicenseTyp', 'LicenseSta': 'LicenseSta', 'LicenseSub': 'LicenseSub', 'DateGrante': 'DateGrante', 'DateApplic': 'DateApplic', 'DateExpiry': 'DateExpiry', 'LicenseHol': 'LicenseHol', 'Minerals': 'Minerals', 'PrimaryOff': 'PrimaryOff', 'Province': 'Province', 'District': 'District', 'CadastralU': 'CadastralU', 'ValidYears': 'ValidYears', 'AreaHectar': 'AreaHectar', 'NewLaw': 'NewLaw', 'shape_Leng': 'shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MiningConcessions2006_37.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'License': 'License', 'LicenseSuf': 'LicenseSuf', 'OldLicense': 'OldLicense', 'LicenseTyp': 'LicenseTyp', 'LicenseSta': 'LicenseSta', 'LicenseSub': 'LicenseSub', 'DateGrante': 'DateGrante', 'DateApplic': 'DateApplic', 'DateExpiry': 'DateExpiry', 'LicenseHol': 'LicenseHol', 'Minerals': 'Minerals', 'PrimaryOff': 'PrimaryOff', 'Province': 'Province', 'District': 'District', 'CadastralU': 'CadastralU', 'ValidYears': 'ValidYears', 'AreaHectar': 'AreaHectar', 'NewLaw': 'NewLaw', 'shape_Leng': 'shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FreshwaterAquaculturePotentialDistricts_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DISTRITO': 'DISTRITO', 'Shape_Leng': 'Shape_Leng', 'País': 'País', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EcoregionsBiomes_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ECO_NAME': 'ECO_NAME', 'BIOME_NUM': 'BIOME_NUM', 'BIOME_NAME': 'BIOME_NAME', 'REALM': 'REALM', 'ECO_BIOME_': 'ECO_BIOME_', 'NNH': 'NNH', 'ECO_ID': 'ECO_ID', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'NNH_NAME': 'NNH_NAME', 'COLOR': 'COLOR', 'COLOR_BIO': 'COLOR_BIO', 'COLOR_NNH': 'COLOR_NNH', 'LICENSE': 'LICENSE', });
lyr_Ecoregions_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ECO_NAME': 'ECO_NAME', 'REALM': 'REALM', 'BIOME': 'BIOME', 'ECO_NUM': 'ECO_NUM', 'ECO_ID': 'ECO_ID', 'ECO_SYM': 'ECO_SYM', 'GBL_STAT': 'GBL_STAT', 'G200_REGIO': 'G200_REGIO', 'G200_NUM': 'G200_NUM', 'G200_BIOME': 'G200_BIOME', 'G200_STAT': 'G200_STAT', 'Shape_Leng': 'Shape_Leng', 'area_km2': 'area_km2', 'eco_code': 'eco_code', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AgroEcologicalZones_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ECOLBL': 'ECOLBL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Flora_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FID_Flora_': 'FID_Flora_', 'flora_FZ_C': 'flora_FZ_C', 'floralegen': 'floralegen', 'floraleg_1': 'floraleg_1', 'FID_Provin': 'FID_Provin', 'PROVINCIA': 'PROVINCIA', 'COUNT': 'COUNT', 'SUM_AREA': 'SUM_AREA', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FreshwaterEcoregions_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ECO_ID': 'ECO_ID', 'ECOREGION': 'ECOREGION', 'MHT_TXT': 'MHT_TXT', 'MHT_NO': 'MHT_NO', 'OLD_ID': 'OLD_ID', 'ECO_ID_U': 'ECO_ID_U', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MarineEcoregions_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ECO_CODE': 'ECO_CODE', 'ECOREGION': 'ECOREGION', 'PROV_CODE': 'PROV_CODE', 'PROVINCE': 'PROVINCE', 'RLM_CODE': 'RLM_CODE', 'REALM': 'REALM', 'ALT_CODE': 'ALT_CODE', 'ECO_CODE_X': 'ECO_CODE_X', 'Lat_Zone': 'Lat_Zone', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TerrestrialEcoregions_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ECO_ID_U': 'ECO_ID_U', 'ECO_CODE': 'ECO_CODE', 'ECO_NAME': 'ECO_NAME', 'ECO_NUM': 'ECO_NUM', 'ECODE_NAME': 'ECODE_NAME', 'CLS_CODE': 'CLS_CODE', 'ECO_NOTES': 'ECO_NOTES', 'WWF_REALM': 'WWF_REALM', 'WWF_REALM2': 'WWF_REALM2', 'WWF_MHTNUM': 'WWF_MHTNUM', 'WWF_MHTNAM': 'WWF_MHTNAM', 'RealmMHT': 'RealmMHT', 'ER_UPDATE': 'ER_UPDATE', 'ER_DATE_U': 'ER_DATE_U', 'ER_RATION': 'ER_RATION', 'SOURCEDATA': 'SOURCEDATA', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ConservationAreas_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nome': 'Nome', 'Name': 'Name', 'Categoria': 'Categoria', 'Areahectar': 'Areahectar', 'layer': 'layer', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ReservasNacionais_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Designatio': 'Designatio', 'IUCN': 'IUCN', 'Country': 'Country', 'Size_ha': 'Size_ha', 'Hist_date': 'Hist_date', 'PPF_MD': 'PPF_MD', 'WDPA_MD': 'WDPA_MD', 'Desig_ha': 'Desig_ha', 'Event': 'Event', 'First_Desi': 'First_Desi', 'Edit_date': 'Edit_date', 'Owner': 'Owner', 'Tenure': 'Tenure', 'Hectares': 'Hectares', 'Perimeter': 'Perimeter', 'ed_Comment': 'ed_Comment', 'ed_Comme_1': 'ed_Comme_1', 'ed_Comme_2': 'ed_Comme_2', 'ORIG_FID': 'ORIG_FID', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'ID': 'ID', 'NOMES': 'NOMES', 'AREA_KILOM': 'AREA_KILOM', 'PERIMETER_': 'PERIMETER_', 'AREA_HA': 'AREA_HA', 'PROVíNCIA': 'PROVíNCIA', 'ACRES': 'ACRES', 'AREA': 'AREA', 'TYPE': 'TYPE', 'OPERATOR': 'OPERATOR', 'LEASE_FEE': 'LEASE_FEE', 'AREANAME': 'AREANAME', 'ISO3': 'ISO3', 'LAT': 'LAT', 'LON': 'LON', 'DESIGNATE': 'DESIGNATE', 'GISNAME': 'GISNAME', 'SOURCE_ID': 'SOURCE_ID', 'IUCNCAT': 'IUCNCAT', 'STATUS': 'STATUS', 'SITE_CODE': 'SITE_CODE', 'MARINE': 'MARINE', 'ADMIN': 'ADMIN', 'MANAGEMENT': 'MANAGEMENT', 'EST_DATE': 'EST_DATE', 'NOTES': 'NOTES', 'SOURCE': 'SOURCE', 'TITLE': 'TITLE', 'SOURCE_DES': 'SOURCE_DES', 'YEAR': 'YEAR', 'SCALE': 'SCALE', 'DATUM': 'DATUM', 'COMMENT': 'COMMENT', 'ORIGIN_ID': 'ORIGIN_ID', 'PUBLISHER': 'PUBLISHER', 'APPROX_YR': 'APPROX_YR', 'PROJECT': 'PROJECT', 'DETIALS': 'DETIALS', 'GIS_HA': 'GIS_HA', 'Ponto': 'Ponto', 'X': 'X', 'Y': 'Y', 'FID_Niassa': 'FID_Niassa', 'DISTRITO': 'DISTRITO', 'BUFF_DIST': 'BUFF_DIST', 'FID_land_B': 'FID_land_B', 'DISTRITO_1': 'DISTRITO_1', 'Name_1': 'Name_1', 'BUFF_DIST_': 'BUFF_DIST_', 'Shape_Leng': 'Shape_Leng', 'RESG_': 'RESG_', 'RESG_ID': 'RESG_ID', 'TIPO_RES': 'TIPO_RES', 'TOPONIMO': 'TOPONIMO', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ThreatenedorCriticalEcosystems_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nome': 'Nome', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AreasofEndemism_49.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Priority_s': 'Priority_s', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AreasofHighScientificValue_50.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MigratorySpeciesHabitat_51.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GlobalCoralReefs_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'GRIDCODE': 'GRIDCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MarineHabitatsandCorals_53.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Code': 'Code', 'Descriptio': 'Descriptio', 'Area_SqKm_': 'Area_SqKm_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DugongHabitats_54.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AreasofKeyEvolutionaryProcesses_55.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EndemicSpeciesHabitats_56.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nome': 'Nome', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IFCHabitatCategories_57.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IFC': 'IFC', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KeyBiodiversityAreas_58.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'KBA_Name': 'KBA_Name', 'Country': 'Country', 'Region': 'Region', 'KBA_Area': 'KBA_Area', 'Trigger_BD': 'Trigger_BD', 'Created_By': 'Created_By', 'Threats': 'Threats', 'KBA_Criter': 'KBA_Criter', 'Del_text': 'Del_text', 'layer': 'layer', 'path': 'path', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MarineHabitats_59.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Categoria': 'Categoria', 'Nome': 'Nome', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MozambiqueMangroves_60.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'grid_code': 'grid_code', 'ISO3': 'ISO3', 'PARISO3': 'PARISO3', 'CTYPE': 'CTYPE', 'AREA_KM2': 'AREA_KM2', 'AREA_M2': 'AREA_M2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MangrovesWWF2018_61.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Class': 'Class', 'Area_ha': 'Area_ha', 'Mang_1995': 'Mang_1995', 'Mang_2000': 'Mang_2000', 'Mang_2005': 'Mang_2005', 'Mang_2010': 'Mang_2010', 'Mang_2015': 'Mang_2015', 'Mang_2018': 'Mang_2018', 'Dynamic': 'Dynamic', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MangrovesUEM2013_62.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MangrovesRCMDR2015_63.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CLASS_NAME': 'CLASS_NAME', 'AREA': 'AREA', 'AREA_KM2': 'AREA_KM2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MangrovesDIRF_64.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID': 'OBJECTID', 'LC_PRI': 'LC_PRI', 'LC_SEC': 'LC_SEC', 'LC_TER': 'LC_TER', 'NOTE_': 'NOTE_', 'AUTOR': 'AUTOR', 'LC_PRI_PER': 'LC_PRI_PER', 'LC_SEC_PER': 'LC_SEC_PER', 'LC_TER_PER': 'LC_TER_PER', 'HECTARES': 'HECTARES', 'POLY_ID': 'POLY_ID', 'OBJECTID_1': 'OBJECTID_1', 'LC_PRI_1': 'LC_PRI_1', 'LC_DESCRIP': 'LC_DESCRIP', 'RECLASS1': 'RECLASS1', 'RECLASS2': 'RECLASS2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2020_65.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2019_66.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2018_67.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2017_68.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2016_69.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2015_70.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2010_71.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2009_72.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2008_73.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves2007_74.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mangroves1996_75.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PXLVAL': 'PXLVAL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BiodiversityHotspots_76.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nome': 'Nome', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SaltmarshDistribution_77.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LAYER_NAME': 'LAYER_NAME', 'METADATA_I': 'METADATA_I', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'LOC_DEF': 'LOC_DEF', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'SPECIES': 'SPECIES', 'DATA_TYPE': 'DATA_TYPE', 'SURVEY_MET': 'SURVEY_MET', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'DATE_TYPE': 'DATE_TYPE', 'VERIF': 'VERIF', 'GIS_AREA_K': 'GIS_AREA_K', 'Shape_Leng': 'Shape_Leng', 'REP_AREA_K': 'REP_AREA_K', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SeagrassPolygons_78.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'datasetID': 'datasetID', 'BIO_CLASS': 'BIO_CLASS', 'fieldNotes': 'fieldNotes', 'habitat': 'habitat', 'AREA_SQKM': 'AREA_SQKM', 'vernacular': 'vernacular', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'scientific': 'scientific', 'habitatID': 'habitatID', 'nameAccord': 'nameAccord', 'eventDate': 'eventDate', 'verif': 'verif', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MozambiqueCoralReefs_79.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'COV_TYPE': 'COV_TYPE', 'RB_ATTRIB': 'RB_ATTRIB', 'RB_CODE': 'RB_CODE', 'RB_DEPTH_C': 'RB_DEPTH_C', 'RB_DEPTH_A': 'RB_DEPTH_A', 'ISO3_1': 'ISO3_1', 'REEF_NAM_1': 'REEF_NAM_1', 'ISLAND_N_1': 'ISLAND_N_1', 'COUNTRY_1': 'COUNTRY_1', 'SOVEREIG_1': 'SOVEREIG_1', 'SOURCE_ID': 'SOURCE_ID', 'DC_TITLE': 'DC_TITLE', 'DESCRIPTIO': 'DESCRIPTIO', 'TO_DATE': 'TO_DATE', 'FROM_DATE': 'FROM_DATE', 'NOM_SCALE': 'NOM_SCALE', 'AUDIT': 'AUDIT', 'PUBLISHER': 'PUBLISHER', 'CITATION': 'CITATION', 'PUB_DATE': 'PUB_DATE', 'NOTES': 'NOTES', 'AREA_KM2': 'AREA_KM2', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WarmWaterCoralReefs2018_80.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LAYER_NAME': 'LAYER_NAME', 'METADATA_I': 'METADATA_I', 'ORIG_NAME': 'ORIG_NAME', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'SPECIES': 'SPECIES', 'DATA_TYPE': 'DATA_TYPE', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'DATE_TYPE': 'DATE_TYPE', 'VERIF': 'VERIF', 'NAME': 'NAME', 'LOC_DEF': 'LOC_DEF', 'SURVEY_MET': 'SURVEY_MET', 'GIS_AREA_K': 'GIS_AREA_K', 'Shape_Leng': 'Shape_Leng', 'REP_AREA_K': 'REP_AREA_K', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ColdWaterCoralReefs2017_81.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LAYER_NAME': 'LAYER_NAME', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'LOC_DEF': 'LOC_DEF', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'SPECIES': 'SPECIES', 'DATA_TYPE': 'DATA_TYPE', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'DATE_TYPE': 'DATE_TYPE', 'VERIF': 'VERIF', 'SURVEY_MET': 'SURVEY_MET', 'METADATA_I': 'METADATA_I', 'GIS_AREA_K': 'GIS_AREA_K', 'Shape_Leng': 'Shape_Leng', 'REP_AREA_K': 'REP_AREA_K', 'DEPTH_MIN': 'DEPTH_MIN', 'DEPTH_MAX': 'DEPTH_MAX', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CoralReefs_82.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CORAL_': 'CORAL_', 'CORAL_ID': 'CORAL_ID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ImportantSharkandRayAreas_83.set('fieldAliases', {'fid': 'fid', 'isra_code': 'isra_code', 'Status': 'Status', 'Name': 'Name', 'Jurisdicti': 'Jurisdicti', 'Region': 'Region', 'Criteria': 'Criteria', 'Subcriteri': 'Subcriteri', 'QueryCrite': 'QueryCrite', 'QuerySubcr': 'QuerySubcr', 'MinDepth': 'MinDepth', 'MaxDepth': 'MaxDepth', 'Order_': 'Order_', 'Family': 'Family', 'URL': 'URL', });
lyr_SeagrassPolygons_84.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'datasetID': 'datasetID', 'BIO_CLASS': 'BIO_CLASS', 'fieldNotes': 'fieldNotes', 'habitat': 'habitat', 'AREA_SQKM': 'AREA_SQKM', 'vernacular': 'vernacular', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'scientific': 'scientific', 'habitatID': 'habitatID', 'nameAccord': 'nameAccord', 'eventDate': 'eventDate', 'verif': 'verif', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SeagrassPoints_85.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'datasetID': 'datasetID', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'scientific': 'scientific', 'VERIF': 'VERIF', 'REP_AREA_K': 'REP_AREA_K', 'eventDate': 'eventDate', });
lyr_ImportantBirdAreas_86.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Y_DEG': 'Y_DEG', 'Y_MIN': 'Y_MIN', 'X_DEG': 'X_DEG', 'X_MIN': 'X_MIN', 'YEAR': 'YEAR', 'Y_DD': 'Y_DD', 'X_DD': 'X_DD', });
lyr_TurtleNestingSites_87.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nome': 'Nome', 'Shape_Length': 'Shape_Length', });
lyr_Deforestation_geonode_20160623_88.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DISTRITO': 'DISTRITO', 'COPROV': 'COPROV', 'CODIS_Nbr': 'CODIS_Nbr', 'PROVINCIA': 'PROVINCIA', 'ICA_Areas': 'ICA_Areas', 'ICA_Categ': 'ICA_Categ', 'VAC_Areas': 'VAC_Areas', 'VAC_Categ': 'VAC_Categ', 'SETS_Areas': 'SETS_Areas', 'SETS_Categ': 'SETS_Categ', 'AreaKm2': 'AreaKm2', 'TCLossArea': 'TCLossArea', 'TCLossPerc': 'TCLossPerc', 'TCLossClas': 'TCLossClas', 'TCLossText': 'TCLossText', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Deforestation_2023_89.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'gridcode': 'gridcode', 'area_ha': 'area_ha', });
lyr_Deforestation_2022_90.set('fieldAliases', {'fid': 'fid', 'ADM3_PT': 'ADM3_PT', 'ADM2_PT': 'ADM2_PT', 'ADM1_PT': 'ADM1_PT', 'gridcode': 'gridcode', 'area_ha': 'area_ha', });
lyr_Deforestation_2021_91.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'gridcode': 'gridcode', 'area': 'area', 'hecta': 'hecta', });
lyr_Deforestation_2020_92.set('fieldAliases', {'fid': 'fid', 'gridcode': 'gridcode', 'Area_ha': 'Area_ha', 'ADM3_PT': 'ADM3_PT', 'ADM2_PT': 'ADM2_PT', 'ADM1_PT': 'ADM1_PT', 'ADM0_PT': 'ADM0_PT', });
lyr_Deforestation_2019_93.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Deforestation_2018_94.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Deforestation_2017_95.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Soil_96.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MOSOEQA': 'MOSOEQA', 'AGRUP_SOLO': 'AGRUP_SOLO', 'CARC_DOMIN': 'CARC_DOMIN', 'GEOM_GEOLO': 'GEOM_GEOLO', 'FORMA_TERR': 'FORMA_TERR', 'TOPOGRAFIA': 'TOPOGRAFIA', 'TEXTURA': 'TEXTURA', 'DRENAGEM': 'DRENAGEM', 'PROFUNDI__': 'PROFUNDI__', 'ACIDEZ_ALC': 'ACIDEZ_ALC', 'MATER_RGAN': 'MATER_RGAN', 'SAL_SUPERF': 'SAL_SUPERF', 'SODIC_SUPE': 'SODIC_SUPE', 'CLASS_FAO': 'CLASS_FAO', 'CLASS_USDA': 'CLASS_USDA', 'TIP_VEGETA': 'TIP_VEGETA', 'PRINC_LIMI': 'PRINC_LIMI', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Geology_97.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LITO_': 'LITO_', 'LITO_ID': 'LITO_ID', 'FORMAIDO': 'FORMAIDO', 'CLASSE': 'CLASSE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Erosion_98.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'EROSAO_ID': 'EROSAO_ID', 'CAT__DE_RI': 'CAT__DE_RI', 'ACRES': 'ACRES', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Healthfacilitiespolygons_99.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Healthfacilitiespoints_100.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Healthfacilities_1_101.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'F1': 'F1', 'CP': 'CP', 'CD': 'CD', 'CUUS': 'CUUS', 'CT': 'CT', 'CMB': 'CMB', 'US': 'US', 'CC': 'CC', 'CNE': 'CNE', 'LAT': 'LAT', 'LON': 'LON', });
lyr_HealthFacilities_102.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'N_': 'N_', 'PROV_NCIA': 'PROV_NCIA', 'DISTRITO': 'DISTRITO', 'LOCALIZAþ_': 'LOCALIZAþ_', 'TIPO': 'TIPO', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', });
lyr_Schools_103.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Symbol': 'Symbol', 'Codigo': 'Codigo', 'CodZona': 'CodZona', 'CodProv': 'CodProv', 'Prov': 'Prov', 'CodDist': 'CodDist', 'Distritos': 'Distritos', 'CodPost': 'CodPost', 'Posto': 'Posto', 'CodLocal': 'CodLocal', 'Localidade': 'Localidade', 'CodBairro': 'CodBairro', 'Bairro': 'Bairro', 'CodAldeiaP': 'CodAldeiaP', 'Aldeia_Pov': 'Aldeia_Pov', 'CodOutraZo': 'CodOutraZo', 'OutraZona': 'OutraZona', 'Data': 'Data', 'Num': 'Num', 'CodElement': 'CodElement', 'Elemento': 'Elemento', 'CodTipo': 'CodTipo', 'Tipo': 'Tipo', 'Nome': 'Nome', 'GPS_Tipo': 'GPS_Tipo', 'GPS': 'GPS', 'Simbolo_do': 'Simbolo_do', 'CodClassif': 'CodClassif', 'Classifica': 'Classifica', 'Abreviat': 'Abreviat', 'Ordem_Clas': 'Ordem_Clas', 'OrdemDesc': 'OrdemDesc', 'CodOrd': 'CodOrd', 'Ordem': 'Ordem', 'Cob': 'Cob', 'Cobertura': 'Cobertura', 'Pared': 'Pared', 'Paredes': 'Paredes', 'Pav': 'Pav', 'Pavimento': 'Pavimento', 'Obs': 'Obs', 'DataReg': 'DataReg', 'Aldeias': 'Aldeias', 'Aldeia_e_N': 'Aldeia_e_N', 'OutrasZona': 'OutrasZona', });
lyr_TertiarySchools_104.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ProvCodigo': 'ProvCodigo', 'Provincia': 'Provincia', 'DistritoCo': 'DistritoCo', 'Distrito': 'Distrito', 'PostoCodig': 'PostoCodig', 'Posto': 'Posto', 'LocalCodig': 'LocalCodig', 'Localidade': 'Localidade', 'BairroCodi': 'BairroCodi', 'Bairro': 'Bairro', 'Aldeia': 'Aldeia', 'OutraZona': 'OutraZona', 'Nome': 'Nome', 'Classifica': 'Classifica', 'Classifi_1': 'Classifi_1', 'Abreviacao': 'Abreviacao', 'CoberturaC': 'CoberturaC', 'Cobertura': 'Cobertura', 'ParedesCod': 'ParedesCod', 'Paredes': 'Paredes', 'PavimentoC': 'PavimentoC', 'Pavimento': 'Pavimento', 'Notas': 'Notas', });
lyr_SecondarySchools_105.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ProvCodigo': 'ProvCodigo', 'Provincia': 'Provincia', 'DistritoCo': 'DistritoCo', 'Distrito': 'Distrito', 'PostoCodig': 'PostoCodig', 'Posto': 'Posto', 'LocalCodig': 'LocalCodig', 'Localidade': 'Localidade', 'BairroCodi': 'BairroCodi', 'Bairro': 'Bairro', 'Aldeia': 'Aldeia', 'OutraZona': 'OutraZona', 'Nome': 'Nome', 'Classifica': 'Classifica', 'Classifi_1': 'Classifi_1', 'Abreviacao': 'Abreviacao', 'CoberturaC': 'CoberturaC', 'Cobertura': 'Cobertura', 'ParedesCod': 'ParedesCod', 'Paredes': 'Paredes', 'PavimentoC': 'PavimentoC', 'Pavimento': 'Pavimento', 'Notas': 'Notas', });
lyr_PrimarySchools_106.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ProvCodigo': 'ProvCodigo', 'Provincia': 'Provincia', 'DistritoCo': 'DistritoCo', 'Distrito': 'Distrito', 'PostoCodig': 'PostoCodig', 'Posto': 'Posto', 'LocalCodig': 'LocalCodig', 'Localidade': 'Localidade', 'BairroCodi': 'BairroCodi', 'Bairro': 'Bairro', 'Aldeia': 'Aldeia', 'OutraZona': 'OutraZona', 'Nome': 'Nome', 'Classifica': 'Classifica', 'Classifi_1': 'Classifi_1', 'Abreviacao': 'Abreviacao', 'CoberturaC': 'CoberturaC', 'Cobertura': 'Cobertura', 'ParedesCod': 'ParedesCod', 'Paredes': 'Paredes', 'PavimentoC': 'PavimentoC', 'Pavimento': 'Pavimento', 'Notas': 'Notas', });
lyr_LimitesCosteiros_107.set('fieldAliases', {'fid': 'fid', 'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DISTRITO': 'DISTRITO', 'Shape_Leng': 'Shape_Leng', 'País': 'País', 'BUFF_DIST': 'BUFF_DIST', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ExclusiveEconomicZone_108.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MRGID': 'MRGID', 'GeoName': 'GeoName', 'MRGID_Ter1': 'MRGID_Ter1', 'Pol_type': 'Pol_type', 'MRGID_Sov1': 'MRGID_Sov1', 'Territory1': 'Territory1', 'ISO_Ter1': 'ISO_Ter1', 'Sovereign1': 'Sovereign1', 'MRGID_Ter2': 'MRGID_Ter2', 'MRGID_Sov2': 'MRGID_Sov2', 'Territory2': 'Territory2', 'ISO_Ter2': 'ISO_Ter2', 'Sovereign2': 'Sovereign2', 'MRGID_Ter3': 'MRGID_Ter3', 'MRGID_Sov3': 'MRGID_Sov3', 'Territory3': 'Territory3', 'ISO_Ter3': 'ISO_Ter3', 'Sovereign3': 'Sovereign3', 'x_1': 'x_1', 'y_1': 'y_1', 'MRGID_EEZ': 'MRGID_EEZ', 'Area_km2': 'Area_km2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Concessoesflorestais_109.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LATDD': 'LATDD', 'LONDD': 'LONDD', 'PERIMETER': 'PERIMETER', 'AREA': 'AREA', 'AREA___HA_': 'AREA___HA_', 'EMPRESA': 'EMPRESA', 'DISTRITO': 'DISTRITO', 'DREA_NO_CR': 'DREA_NO_CR', 'OBS': 'OBS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LakesandFloodedAreas_110.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'AREA_KM2': 'AREA_KM2', 'PER_KM': 'PER_KM', 'HID250G_': 'HID250G_', 'HID250G_ID': 'HID250G_ID', 'TIPO_RIO': 'TIPO_RIO', 'TOPONIMO': 'TOPONIMO', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Waterwayspolygons_111.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Waterwayslines_112.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_pt': 'name_pt', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Shape_Length': 'Shape_Length', });
lyr_CoastlineHydrology1250K_113.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'RioTipo': 'RioTipo', 'RioOrdem': 'RioOrdem', 'Rio': 'Rio', 'Shape_STLe': 'Shape_STLe', });
lyr_Rios_114.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'HID250G_': 'HID250G_', 'HID250G_ID': 'HID250G_ID', 'TIPO_RIO': 'TIPO_RIO', 'ORDEM': 'ORDEM', 'TOPONIMO': 'TOPONIMO', 'ID_OPER': 'ID_OPER', 'Shape_Length': 'Shape_Length', });
lyr_DrainageBasin_1_115.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOME': 'NOME', 'AREA_KM2': 'AREA_KM2', 'PERIM_KM': 'PERIM_KM', 'ZMIN': 'ZMIN', 'ZMAX': 'ZMAX', 'ZMEDIO': 'ZMEDIO', 'ZMEDIAN': 'ZMEDIAN', 'ZRANGE': 'ZRANGE', 'ZCOEFVAR': 'ZCOEFVAR', 'ZSTDDEV': 'ZSTDDEV', 'RIOS_KM': 'RIOS_KM', 'SLOPEMIN': 'SLOPEMIN', 'SLOPEMAX': 'SLOPEMAX', 'SLOPEMEDIO': 'SLOPEMEDIO', 'SLOPEMEDIA': 'SLOPEMEDIA', 'SLOPERANGE': 'SLOPERANGE', 'SLOPECOEFV': 'SLOPECOEFV', 'SLOPESTDDE': 'SLOPESTDDE', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DrainageBasin_116.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NR': 'NR', 'IDENT': 'IDENT', 'SIGLA': 'SIGLA', 'NOME': 'NOME', 'AREA_MOC_2': 'AREA_MOC_2', 'AREA_TOT_2': 'AREA_TOT_2', 'COMP_MOC_K': 'COMP_MOC_K', 'COMP_TOT_K': 'COMP_TOT_K', 'CODIGO_WMO': 'CODIGO_WMO', 'ARA': 'ARA', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Bathymetry_117.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'VALOR': 'VALOR', 'Shape_Length': 'Shape_Length', });
lyr_ExclusiveEconomicZone_118.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Line_ID': 'Line_ID', 'Line_name': 'Line_name', 'Line_type': 'Line_type', 'MRGID_Sov1': 'MRGID_Sov1', 'MRGID_Ter1': 'MRGID_Ter1', 'Territory1': 'Territory1', 'Sovereign1': 'Sovereign1', 'MRGID_Ter2': 'MRGID_Ter2', 'Territory2': 'Territory2', 'MRGID_Sov2': 'MRGID_Sov2', 'Sovereign2': 'Sovereign2', 'MRGID_EEZ1': 'MRGID_EEZ1', 'EEZ1': 'EEZ1', 'MRGID_EEZ2': 'MRGID_EEZ2', 'EEZ2': 'EEZ2', 'Source1': 'Source1', 'URL1': 'URL1', 'Source2': 'Source2', 'URL2': 'URL2', 'Source3': 'Source3', 'URL3': 'URL3', 'Origin': 'Origin', 'Doc_date': 'Doc_date', 'MRGID_JReg': 'MRGID_JReg', 'Joint_reg': 'Joint_reg', 'Length_km': 'Length_km', 'Shape_Length': 'Shape_Length', });
lyr_EnergyInfrastructure_119.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'LineColor': 'LineColor', 'Shape_Length': 'Shape_Length', });
lyr_Provinces_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ADM1_PT': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoastalDistricts_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'DISTRITO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'País': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AdministrativePosts_3.set('fieldImages', {'fid': 'TextEdit', 'ADM3_PT': 'TextEdit', 'ADM2_PT': 'TextEdit', 'ADM1_PT': 'TextEdit', 'ADM0_PT': 'TextEdit', });
lyr_Bairros_aldeias_localidades_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'CodProv': 'TextEdit', 'Provincia': 'TextEdit', 'CodDist': 'TextEdit', 'Distrito': 'TextEdit', 'CodPost': 'TextEdit', 'Posto': 'TextEdit', 'CodLocal': 'TextEdit', 'Localidade': 'TextEdit', 'CodBairro': 'TextEdit', 'Bairro': 'TextEdit', 'TOTAL': 'TextEdit', 'H': 'TextEdit', 'M': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Inhambaneprovinceboundaries_5.set('fieldImages', {'fid': 'TextEdit', 'ADM1_PT': 'TextEdit', });
lyr_Settlements_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'FID_1': 'Range', 'Sett_Name': 'TextEdit', 'F_CLASS': 'TextEdit', 'F_DESIG': 'TextEdit', 'ADM1_Old': 'TextEdit', 'ADM2_Old': 'TextEdit', 'Country': 'TextEdit', 'ISO3': 'TextEdit', 'ADM1_Name': 'TextEdit', 'ADM1_Code': 'TextEdit', 'ADM1_ID': 'TextEdit', 'ADM2_Name': 'TextEdit', 'ADM2_Code': 'TextEdit', 'ADM2_ID': 'TextEdit', 'ADM3_Name': 'TextEdit', 'ADM3_Code': 'TextEdit', 'ADM3_ID': 'TextEdit', 'ADM3_Type': 'TextEdit', 'ADM3_TypeE': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_NaturalHazardAreas_10.set('fieldImages', {'OBJECTID': '', 'DISTRITO': '', 'COPROV': '', 'CODIS_Nbr': '', 'PROVINCIA': '', 'FloodClass': '', 'Dr_Class': '', 'Cy_Class': '', 'NS_Risk': '', 'NS_Class': '', 'NS_Text': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Populatedplacespolygons_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'place': '', 'landuse': '', 'population': '', 'is_in': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_PopulatedPlacesPoints_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'place': '', 'landuse': '', 'population': '', 'is_in': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', });
lyr_MajorCities_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TOP250G_': 'TextEdit', 'TOP250G_ID': 'TextEdit', 'TIPO_TOP': 'Range', 'TOPONIMO': 'TextEdit', 'ID_OPER': 'Range', });
lyr_Villages_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'NOME': 'TextEdit', 'TOTAL': 'Range', 'MASCULINO': 'TextEdit', 'FEMININO': 'TextEdit', 'AGREGADOS': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CODIGO_CEN': 'TextEdit', });
lyr_Financialservicespoints_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'network': 'TextEdit', 'addr_full': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_pt': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_Fishingcenters_16.set('fieldImages', {'fid': '', 'OBJECTID': '', 'CENTROS_PE': '', 'Y': '', 'X': '', });
lyr_Poverty_17.set('fieldImages', {'fid': '', 'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'ADM250G_': '', 'ADM250G_ID': '', 'DISTRITO': '', 'PROVINCIA': '', 'Num_Pobres': '', 'Pop_07': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Airportspolygons_18.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'aeroway': '', 'building': '', 'emergency': '', 'emergency_': '', 'operator_t': '', 'capacity_p': '', 'addr_full': '', 'addr_city': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Airportslines_19.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'aeroway': '', 'building': '', 'emergency': '', 'emergency_': '', 'operator_t': '', 'capacity_p': '', 'addr_full': '', 'addr_city': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', 'Shape_Length': '', });
lyr_Roads_1_20.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'ESTRADA': 'Range', 'ENOVA': 'Range', 'PROV': 'Range', 'TROçO': 'TextEdit', 'SEQUêNCIA': 'Range', 'DIST1': 'TextEdit', 'S_FIC': 'TextEdit', 'COND': 'TextEdit', 'CODE': 'TextEdit', 'MANUT96': 'TextEdit', 'TR94': 'Range', 'SADC': 'Range', 'C_VIAK': 'TextEdit', 'D_PAIS': 'TextEdit', 'T_VELHO': 'Range', 'LOCAL_I': 'TextEdit', 'LOCAL_F': 'TextEdit', 'NOD_I': 'Range', 'NOD_F': 'Range', 'CRUZ_I': 'TextEdit', 'CRUZ_F': 'TextEdit', 'LEVANTADO': 'TextEdit', 'TYPE': 'TextEdit', 'ROADNO': 'TextEdit', 'PAVEDTYPE': 'TextEdit', 'ID': 'TextEdit', 'NEWNO': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'REASON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'OLDID': 'TextEdit', 'OLDTYPE': 'TextEdit', 'UNCONTYPE': 'TextEdit', 'UNCON_NAME': 'TextEdit', 'LENGTH': 'TextEdit', 'TYPEQUAL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Roads_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'osmid': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'street': 'TextEdit', 'oneway': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'bridge': 'TextEdit', 'bicycle': 'TextEdit', 'sidewalk': 'TextEdit', 'cycleway': 'TextEdit', 'ford': 'TextEdit', 'incline': 'TextEdit', 'junction': 'TextEdit', 'lit': 'TextEdit', 'surface': 'TextEdit', 'tracktype': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Seaportslines_22.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'amenity': '', 'building': '', 'port': '', 'operator_t': '', 'addr_full': '', 'addr_city': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', 'Shape_Length': '', });
lyr_Seaportspoints_23.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'amenity': '', 'building': '', 'port': '', 'operator_t': '', 'addr_full': '', 'addr_city': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', });
lyr_Ports_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'TOP250G_': 'TextEdit', 'TOP250G_ID': 'TextEdit', 'TIPO_TOP': 'Range', 'TOPONIMO': 'TextEdit', 'ID_OPER': 'Range', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_TransportationUseRoads_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Airportspoints_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'aeroway': 'TextEdit', 'building': 'TextEdit', 'emergency': 'TextEdit', 'emergency_': 'TextEdit', 'operator_t': 'TextEdit', 'capacity_p': 'TextEdit', 'addr_full': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_pt': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_TelecommunicationTowers_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CELLNAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_Pointsofinterest_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_pt': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_MarineAquaculturePotentialDistricts_29.set('fieldImages', {'fid': '', 'OBJECTID_12': '', 'OBJECTID_1': '', 'OBJECTID': '', 'DISTRITO': '', 'Shape_Leng': '', 'País': '', 'Shape_Le_1': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_UpperGroundwaterAquifers_30.set('fieldImages', {'fid': '', 'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'AGUA_': '', 'CAPTA': '', 'CREA': '', 'SRMBOLO': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ClimateTypes_31.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FIRST_SIMB': 'TextEdit', 'FIRST_TIPO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KppenClimateClassification_32.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'FIRST_SIMB': '', 'FIRST_TIPO': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_HydrocarbonConcessions_2_33.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Id': '', 'CONCE_NAME': '', 'Area__ha_': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_HydrocarbonConcessions_1_34.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Concession': '', 'OBJECTID_1': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MiningConcessions2018_35.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Código': '', 'Particip': '', 'Tipo': '', 'Interess': '', 'Substânc': '', 'Grupo_de': '', 'Estado': '', 'Região': '', 'Data_de_': '', 'Data_de1': '', 'Data_de2': '', 'Área': '', 'Referênc': '', 'guidShap': '', 'guidLice': '', 'PartName': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MiningConcessions2011_36.set('fieldImages', {'fid': '', 'OBJECTID': '', 'OID_': '', 'License': '', 'LicenseSuf': '', 'OldLicense': '', 'LicenseTyp': '', 'LicenseSta': '', 'LicenseSub': '', 'DateGrante': '', 'DateApplic': '', 'DateExpiry': '', 'LicenseHol': '', 'Minerals': '', 'PrimaryOff': '', 'Province': '', 'District': '', 'CadastralU': '', 'ValidYears': '', 'AreaHectar': '', 'NewLaw': '', 'shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MiningConcessions2006_37.set('fieldImages', {'fid': '', 'OBJECTID': '', 'OID_': '', 'License': '', 'LicenseSuf': '', 'OldLicense': '', 'LicenseTyp': '', 'LicenseSta': '', 'LicenseSub': '', 'DateGrante': '', 'DateApplic': '', 'DateExpiry': '', 'LicenseHol': '', 'Minerals': '', 'PrimaryOff': '', 'Province': '', 'District': '', 'CadastralU': '', 'ValidYears': '', 'AreaHectar': '', 'NewLaw': '', 'shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FreshwaterAquaculturePotentialDistricts_38.set('fieldImages', {'fid': '', 'OBJECTID_12': '', 'OBJECTID_1': '', 'OBJECTID': '', 'DISTRITO': '', 'Shape_Leng': '', 'País': '', 'Shape_Le_1': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EcoregionsBiomes_39.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ECO_NAME': 'TextEdit', 'BIOME_NUM': 'TextEdit', 'BIOME_NAME': 'TextEdit', 'REALM': 'TextEdit', 'ECO_BIOME_': 'TextEdit', 'NNH': 'TextEdit', 'ECO_ID': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'NNH_NAME': 'TextEdit', 'COLOR': 'TextEdit', 'COLOR_BIO': 'TextEdit', 'COLOR_NNH': 'TextEdit', 'LICENSE': 'TextEdit', });
lyr_Ecoregions_40.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'ECO_NAME': '', 'REALM': '', 'BIOME': '', 'ECO_NUM': '', 'ECO_ID': '', 'ECO_SYM': '', 'GBL_STAT': '', 'G200_REGIO': '', 'G200_NUM': '', 'G200_BIOME': '', 'G200_STAT': '', 'Shape_Leng': '', 'area_km2': '', 'eco_code': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_AgroEcologicalZones_41.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ECOLBL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Flora_42.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FID_Flora_': 'Range', 'flora_FZ_C': 'TextEdit', 'floralegen': 'TextEdit', 'floraleg_1': 'TextEdit', 'FID_Provin': 'Range', 'PROVINCIA': 'TextEdit', 'COUNT': 'TextEdit', 'SUM_AREA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FreshwaterEcoregions_43.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'ECO_ID': '', 'ECOREGION': '', 'MHT_TXT': '', 'MHT_NO': '', 'OLD_ID': '', 'ECO_ID_U': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MarineEcoregions_44.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'ECO_CODE': '', 'ECOREGION': '', 'PROV_CODE': '', 'PROVINCE': '', 'RLM_CODE': '', 'REALM': '', 'ALT_CODE': '', 'ECO_CODE_X': '', 'Lat_Zone': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_TerrestrialEcoregions_45.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'ECO_ID_U': '', 'ECO_CODE': '', 'ECO_NAME': '', 'ECO_NUM': '', 'ECODE_NAME': '', 'CLS_CODE': '', 'ECO_NOTES': '', 'WWF_REALM': '', 'WWF_REALM2': '', 'WWF_MHTNUM': '', 'WWF_MHTNAM': '', 'RealmMHT': '', 'ER_UPDATE': '', 'ER_DATE_U': '', 'ER_RATION': '', 'SOURCEDATA': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ConservationAreas_46.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Nome': '', 'Name': '', 'Categoria': '', 'Areahectar': '', 'layer': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ReservasNacionais_47.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Designatio': 'TextEdit', 'IUCN': 'TextEdit', 'Country': 'TextEdit', 'Size_ha': 'TextEdit', 'Hist_date': 'TextEdit', 'PPF_MD': 'TextEdit', 'WDPA_MD': 'TextEdit', 'Desig_ha': 'TextEdit', 'Event': 'TextEdit', 'First_Desi': 'TextEdit', 'Edit_date': 'TextEdit', 'Owner': 'TextEdit', 'Tenure': 'TextEdit', 'Hectares': 'TextEdit', 'Perimeter': 'TextEdit', 'ed_Comment': 'TextEdit', 'ed_Comme_1': 'TextEdit', 'ed_Comme_2': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'ID': 'TextEdit', 'NOMES': 'TextEdit', 'AREA_KILOM': 'TextEdit', 'PERIMETER_': 'TextEdit', 'AREA_HA': 'TextEdit', 'PROVíNCIA': 'TextEdit', 'ACRES': 'TextEdit', 'AREA': 'TextEdit', 'TYPE': 'TextEdit', 'OPERATOR': 'TextEdit', 'LEASE_FEE': 'TextEdit', 'AREANAME': 'TextEdit', 'ISO3': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'DESIGNATE': 'TextEdit', 'GISNAME': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'IUCNCAT': 'TextEdit', 'STATUS': 'TextEdit', 'SITE_CODE': 'Range', 'MARINE': 'TextEdit', 'ADMIN': 'TextEdit', 'MANAGEMENT': 'TextEdit', 'EST_DATE': 'DateTime', 'NOTES': 'TextEdit', 'SOURCE': 'TextEdit', 'TITLE': 'TextEdit', 'SOURCE_DES': 'TextEdit', 'YEAR': 'TextEdit', 'SCALE': 'TextEdit', 'DATUM': 'TextEdit', 'COMMENT': 'TextEdit', 'ORIGIN_ID': 'TextEdit', 'PUBLISHER': 'TextEdit', 'APPROX_YR': 'TextEdit', 'PROJECT': 'TextEdit', 'DETIALS': 'TextEdit', 'GIS_HA': 'TextEdit', 'Ponto': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FID_Niassa': 'Range', 'DISTRITO': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'FID_land_B': 'Range', 'DISTRITO_1': 'TextEdit', 'Name_1': 'TextEdit', 'BUFF_DIST_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'RESG_': 'TextEdit', 'RESG_ID': 'TextEdit', 'TIPO_RES': 'Range', 'TOPONIMO': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ThreatenedorCriticalEcosystems_48.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'Nome': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AreasofEndemism_49.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ID': '', 'Priority_s': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_AreasofHighScientificValue_50.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MigratorySpeciesHabitat_51.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_GlobalCoralReefs_52.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'GRIDCODE': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MarineHabitatsandCorals_53.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Code': '', 'Descriptio': '', 'Area_SqKm_': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DugongHabitats_54.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AreasofKeyEvolutionaryProcesses_55.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EndemicSpeciesHabitats_56.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'Nome': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IFCHabitatCategories_57.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'IFC': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KeyBiodiversityAreas_58.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'Range', 'KBA_Name': 'TextEdit', 'Country': 'TextEdit', 'Region': 'TextEdit', 'KBA_Area': 'TextEdit', 'Trigger_BD': 'TextEdit', 'Created_By': 'TextEdit', 'Threats': 'TextEdit', 'KBA_Criter': 'TextEdit', 'Del_text': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MarineHabitats_59.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Categoria': '', 'Nome': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MozambiqueMangroves_60.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'grid_code': 'Range', 'ISO3': 'TextEdit', 'PARISO3': 'TextEdit', 'CTYPE': 'TextEdit', 'AREA_KM2': 'TextEdit', 'AREA_M2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MangrovesWWF2018_61.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'Class': 'TextEdit', 'Area_ha': 'TextEdit', 'Mang_1995': 'Range', 'Mang_2000': 'Range', 'Mang_2005': 'Range', 'Mang_2010': 'Range', 'Mang_2015': 'Range', 'Mang_2018': 'Range', 'Dynamic': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MangrovesUEM2013_62.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MangrovesRCMDR2015_63.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CLASS_NAME': 'TextEdit', 'AREA': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MangrovesDIRF_64.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_12': 'TextEdit', 'OBJECTID': 'Range', 'LC_PRI': 'TextEdit', 'LC_SEC': 'TextEdit', 'LC_TER': 'TextEdit', 'NOTE_': 'TextEdit', 'AUTOR': 'Range', 'LC_PRI_PER': 'Range', 'LC_SEC_PER': 'Range', 'LC_TER_PER': 'Range', 'HECTARES': 'TextEdit', 'POLY_ID': 'TextEdit', 'OBJECTID_1': 'Range', 'LC_PRI_1': 'TextEdit', 'LC_DESCRIP': 'TextEdit', 'RECLASS1': 'Range', 'RECLASS2': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2020_65.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2019_66.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2018_67.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2017_68.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2016_69.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2015_70.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2010_71.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2009_72.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2008_73.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves2007_74.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangroves1996_75.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PXLVAL': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BiodiversityHotspots_76.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'Nome': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SaltmarshDistribution_77.set('fieldImages', {'fid': '', 'OBJECTID': '', 'LAYER_NAME': '', 'METADATA_I': '', 'NAME': '', 'ORIG_NAME': '', 'LOC_DEF': '', 'FAMILY': '', 'GENUS': '', 'SPECIES': '', 'DATA_TYPE': '', 'SURVEY_MET': '', 'START_DATE': '', 'END_DATE': '', 'DATE_TYPE': '', 'VERIF': '', 'GIS_AREA_K': '', 'Shape_Leng': '', 'REP_AREA_K': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SeagrassPolygons_78.set('fieldImages', {'fid': '', 'OBJECTID': '', 'datasetID': '', 'BIO_CLASS': '', 'fieldNotes': '', 'habitat': '', 'AREA_SQKM': '', 'vernacular': '', 'FAMILY': '', 'GENUS': '', 'scientific': '', 'habitatID': '', 'nameAccord': '', 'eventDate': '', 'verif': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_MozambiqueCoralReefs_79.set('fieldImages', {'fid': '', 'OBJECTID': '', 'OBJECTID_1': '', 'COV_TYPE': '', 'RB_ATTRIB': '', 'RB_CODE': '', 'RB_DEPTH_C': '', 'RB_DEPTH_A': '', 'ISO3_1': '', 'REEF_NAM_1': '', 'ISLAND_N_1': '', 'COUNTRY_1': '', 'SOVEREIG_1': '', 'SOURCE_ID': '', 'DC_TITLE': '', 'DESCRIPTIO': '', 'TO_DATE': '', 'FROM_DATE': '', 'NOM_SCALE': '', 'AUDIT': '', 'PUBLISHER': '', 'CITATION': '', 'PUB_DATE': '', 'NOTES': '', 'AREA_KM2': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_WarmWaterCoralReefs2018_80.set('fieldImages', {'fid': '', 'OBJECTID': '', 'LAYER_NAME': '', 'METADATA_I': '', 'ORIG_NAME': '', 'FAMILY': '', 'GENUS': '', 'SPECIES': '', 'DATA_TYPE': '', 'START_DATE': '', 'END_DATE': '', 'DATE_TYPE': '', 'VERIF': '', 'NAME': '', 'LOC_DEF': '', 'SURVEY_MET': '', 'GIS_AREA_K': '', 'Shape_Leng': '', 'REP_AREA_K': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ColdWaterCoralReefs2017_81.set('fieldImages', {'fid': '', 'OBJECTID': '', 'LAYER_NAME': '', 'NAME': '', 'ORIG_NAME': '', 'LOC_DEF': '', 'FAMILY': '', 'GENUS': '', 'SPECIES': '', 'DATA_TYPE': '', 'START_DATE': '', 'END_DATE': '', 'DATE_TYPE': '', 'VERIF': '', 'SURVEY_MET': '', 'METADATA_I': '', 'GIS_AREA_K': '', 'Shape_Leng': '', 'REP_AREA_K': '', 'DEPTH_MIN': '', 'DEPTH_MAX': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_CoralReefs_82.set('fieldImages', {'fid': '', 'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'CORAL_': '', 'CORAL_ID': '', 'NAME': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ImportantSharkandRayAreas_83.set('fieldImages', {'fid': 'TextEdit', 'isra_code': 'TextEdit', 'Status': 'TextEdit', 'Name': 'TextEdit', 'Jurisdicti': 'TextEdit', 'Region': 'TextEdit', 'Criteria': 'TextEdit', 'Subcriteri': 'TextEdit', 'QueryCrite': 'TextEdit', 'QuerySubcr': 'TextEdit', 'MinDepth': 'TextEdit', 'MaxDepth': 'TextEdit', 'Order_': 'TextEdit', 'Family': 'TextEdit', 'URL': 'TextEdit', });
lyr_SeagrassPolygons_84.set('fieldImages', {'fid': '', 'OBJECTID': '', 'datasetID': '', 'BIO_CLASS': '', 'fieldNotes': '', 'habitat': '', 'AREA_SQKM': '', 'vernacular': '', 'FAMILY': '', 'GENUS': '', 'scientific': '', 'habitatID': '', 'nameAccord': '', 'eventDate': '', 'verif': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SeagrassPoints_85.set('fieldImages', {'fid': '', 'OBJECTID': '', 'datasetID': '', 'FAMILY': '', 'GENUS': '', 'scientific': '', 'VERIF': '', 'REP_AREA_K': '', 'eventDate': '', });
lyr_ImportantBirdAreas_86.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAME': '', 'Y_DEG': '', 'Y_MIN': '', 'X_DEG': '', 'X_MIN': '', 'YEAR': '', 'Y_DD': '', 'X_DD': '', });
lyr_TurtleNestingSites_87.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Id': '', 'Nome': '', 'Shape_Length': '', });
lyr_Deforestation_geonode_20160623_88.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRITO': 'TextEdit', 'COPROV': 'TextEdit', 'CODIS_Nbr': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ICA_Areas': 'TextEdit', 'ICA_Categ': 'TextEdit', 'VAC_Areas': 'TextEdit', 'VAC_Categ': 'TextEdit', 'SETS_Areas': 'TextEdit', 'SETS_Categ': 'TextEdit', 'AreaKm2': 'TextEdit', 'TCLossArea': 'TextEdit', 'TCLossPerc': 'Range', 'TCLossClas': 'Range', 'TCLossText': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Deforestation_2023_89.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Deforestation_2022_90.set('fieldImages', {'fid': 'TextEdit', 'ADM3_PT': 'TextEdit', 'ADM2_PT': 'TextEdit', 'ADM1_PT': 'TextEdit', 'gridcode': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Deforestation_2021_91.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'area': 'TextEdit', 'hecta': 'TextEdit', });
lyr_Deforestation_2020_92.set('fieldImages', {'fid': 'TextEdit', 'gridcode': 'TextEdit', 'Area_ha': 'TextEdit', 'ADM3_PT': 'TextEdit', 'ADM2_PT': 'TextEdit', 'ADM1_PT': 'TextEdit', 'ADM0_PT': 'TextEdit', });
lyr_Deforestation_2019_93.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Deforestation_2018_94.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Deforestation_2017_95.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Soil_96.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'MOSOEQA': 'TextEdit', 'AGRUP_SOLO': 'TextEdit', 'CARC_DOMIN': 'TextEdit', 'GEOM_GEOLO': 'TextEdit', 'FORMA_TERR': 'TextEdit', 'TOPOGRAFIA': 'TextEdit', 'TEXTURA': 'TextEdit', 'DRENAGEM': 'TextEdit', 'PROFUNDI__': 'TextEdit', 'ACIDEZ_ALC': 'TextEdit', 'MATER_RGAN': 'TextEdit', 'SAL_SUPERF': 'TextEdit', 'SODIC_SUPE': 'TextEdit', 'CLASS_FAO': 'TextEdit', 'CLASS_USDA': 'TextEdit', 'TIP_VEGETA': 'TextEdit', 'PRINC_LIMI': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Geology_97.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'LITO_': 'TextEdit', 'LITO_ID': 'TextEdit', 'FORMAIDO': 'TextEdit', 'CLASSE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Erosion_98.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'EROSAO_ID': 'TextEdit', 'CAT__DE_RI': 'TextEdit', 'ACRES': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Healthfacilitiespolygons_99.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'operator_t': 'TextEdit', 'capacity_p': 'TextEdit', 'addr_full': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_pt': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Healthfacilitiespoints_100.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', 'name_en': '', 'amenity': '', 'building': '', 'healthcare': '', 'healthca_1': '', 'operator_t': '', 'capacity_p': '', 'addr_full': '', 'addr_city': '', 'source': '', 'name_pt': '', 'osm_id': '', 'osm_type': '', });
lyr_Healthfacilities_1_101.set('fieldImages', {'fid': '', 'OBJECTID': '', 'F1': '', 'CP': '', 'CD': '', 'CUUS': '', 'CT': '', 'CMB': '', 'US': '', 'CC': '', 'CNE': '', 'LAT': '', 'LON': '', });
lyr_HealthFacilities_102.set('fieldImages', {'fid': '', 'OBJECTID': '', 'N_': '', 'PROV_NCIA': '', 'DISTRITO': '', 'LOCALIZAþ_': '', 'TIPO': '', 'LONGITUDE': '', 'LATITUDE': '', });
lyr_Schools_103.set('fieldImages', {'fid': '', 'OBJECTID': '', 'OBJECTID_1': '', 'Symbol': '', 'Codigo': '', 'CodZona': '', 'CodProv': '', 'Prov': '', 'CodDist': '', 'Distritos': '', 'CodPost': '', 'Posto': '', 'CodLocal': '', 'Localidade': '', 'CodBairro': '', 'Bairro': '', 'CodAldeiaP': '', 'Aldeia_Pov': '', 'CodOutraZo': '', 'OutraZona': '', 'Data': '', 'Num': '', 'CodElement': '', 'Elemento': '', 'CodTipo': '', 'Tipo': '', 'Nome': '', 'GPS_Tipo': '', 'GPS': '', 'Simbolo_do': '', 'CodClassif': '', 'Classifica': '', 'Abreviat': '', 'Ordem_Clas': '', 'OrdemDesc': '', 'CodOrd': '', 'Ordem': '', 'Cob': '', 'Cobertura': '', 'Pared': '', 'Paredes': '', 'Pav': '', 'Pavimento': '', 'Obs': '', 'DataReg': '', 'Aldeias': '', 'Aldeia_e_N': '', 'OutrasZona': '', });
lyr_TertiarySchools_104.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ProvCodigo': '', 'Provincia': '', 'DistritoCo': '', 'Distrito': '', 'PostoCodig': '', 'Posto': '', 'LocalCodig': '', 'Localidade': '', 'BairroCodi': '', 'Bairro': '', 'Aldeia': '', 'OutraZona': '', 'Nome': '', 'Classifica': '', 'Classifi_1': '', 'Abreviacao': '', 'CoberturaC': '', 'Cobertura': '', 'ParedesCod': '', 'Paredes': '', 'PavimentoC': '', 'Pavimento': '', 'Notas': '', });
lyr_SecondarySchools_105.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ProvCodigo': '', 'Provincia': '', 'DistritoCo': '', 'Distrito': '', 'PostoCodig': '', 'Posto': '', 'LocalCodig': '', 'Localidade': '', 'BairroCodi': '', 'Bairro': '', 'Aldeia': '', 'OutraZona': '', 'Nome': '', 'Classifica': '', 'Classifi_1': '', 'Abreviacao': '', 'CoberturaC': '', 'Cobertura': '', 'ParedesCod': '', 'Paredes': '', 'PavimentoC': '', 'Pavimento': '', 'Notas': '', });
lyr_PrimarySchools_106.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ProvCodigo': '', 'Provincia': '', 'DistritoCo': '', 'Distrito': '', 'PostoCodig': '', 'Posto': '', 'LocalCodig': '', 'Localidade': '', 'BairroCodi': '', 'Bairro': '', 'Aldeia': '', 'OutraZona': '', 'Nome': '', 'Classifica': '', 'Classifi_1': '', 'Abreviacao': '', 'CoberturaC': '', 'Cobertura': '', 'ParedesCod': '', 'Paredes': '', 'PavimentoC': '', 'Pavimento': '', 'Notas': '', });
lyr_LimitesCosteiros_107.set('fieldImages', {'fid': '', 'OBJECTID_12': '', 'OBJECTID_1': '', 'OBJECTID': '', 'DISTRITO': '', 'Shape_Leng': '', 'País': '', 'BUFF_DIST': '', 'Shape_Le_1': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ExclusiveEconomicZone_108.set('fieldImages', {'fid': '', 'OBJECTID': '', 'MRGID': '', 'GeoName': '', 'MRGID_Ter1': '', 'Pol_type': '', 'MRGID_Sov1': '', 'Territory1': '', 'ISO_Ter1': '', 'Sovereign1': '', 'MRGID_Ter2': '', 'MRGID_Sov2': '', 'Territory2': '', 'ISO_Ter2': '', 'Sovereign2': '', 'MRGID_Ter3': '', 'MRGID_Sov3': '', 'Territory3': '', 'ISO_Ter3': '', 'Sovereign3': '', 'x_1': '', 'y_1': '', 'MRGID_EEZ': '', 'Area_km2': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Concessoesflorestais_109.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LATDD': 'TextEdit', 'LONDD': 'TextEdit', 'PERIMETER': 'TextEdit', 'AREA': 'TextEdit', 'AREA___HA_': 'TextEdit', 'EMPRESA': 'TextEdit', 'DISTRITO': 'TextEdit', 'DREA_NO_CR': 'TextEdit', 'OBS': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LakesandFloodedAreas_110.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'AREA_KM2': 'TextEdit', 'PER_KM': 'TextEdit', 'HID250G_': 'TextEdit', 'HID250G_ID': 'TextEdit', 'TIPO_RIO': 'Range', 'TOPONIMO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Waterwayspolygons_111.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_pt': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Waterwayslines_112.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_pt': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_CoastlineHydrology1250K_113.set('fieldImages', {'fid': '', 'OBJECTID': '', 'RioTipo': '', 'RioOrdem': '', 'Rio': '', 'Shape_STLe': '', });
lyr_Rios_114.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'HID250G_': 'TextEdit', 'HID250G_ID': 'TextEdit', 'TIPO_RIO': 'Range', 'ORDEM': 'Range', 'TOPONIMO': 'TextEdit', 'ID_OPER': 'Range', 'Shape_Length': 'TextEdit', });
lyr_DrainageBasin_1_115.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'ID': '', 'NOME': '', 'AREA_KM2': '', 'PERIM_KM': '', 'ZMIN': '', 'ZMAX': '', 'ZMEDIO': '', 'ZMEDIAN': '', 'ZRANGE': '', 'ZCOEFVAR': '', 'ZSTDDEV': '', 'RIOS_KM': '', 'SLOPEMIN': '', 'SLOPEMAX': '', 'SLOPEMEDIO': '', 'SLOPEMEDIA': '', 'SLOPERANGE': '', 'SLOPECOEFV': '', 'SLOPESTDDE': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DrainageBasin_116.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NR': '', 'IDENT': '', 'SIGLA': '', 'NOME': '', 'AREA_MOC_2': '', 'AREA_TOT_2': '', 'COMP_MOC_K': '', 'COMP_TOT_K': '', 'CODIGO_WMO': '', 'ARA': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Bathymetry_117.set('fieldImages', {'fid': '', 'OBJECTID': '', 'VALOR': '', 'Shape_Length': '', });
lyr_ExclusiveEconomicZone_118.set('fieldImages', {'OBJECTID': '', 'Line_ID': '', 'Line_name': '', 'Line_type': '', 'MRGID_Sov1': '', 'MRGID_Ter1': '', 'Territory1': '', 'Sovereign1': '', 'MRGID_Ter2': '', 'Territory2': '', 'MRGID_Sov2': '', 'Sovereign2': '', 'MRGID_EEZ1': '', 'EEZ1': '', 'MRGID_EEZ2': '', 'EEZ2': '', 'Source1': '', 'URL1': '', 'Source2': '', 'URL2': '', 'Source3': '', 'URL3': '', 'Origin': '', 'Doc_date': '', 'MRGID_JReg': '', 'Joint_reg': '', 'Length_km': '', 'Shape_Length': '', });
lyr_EnergyInfrastructure_119.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'LineColor': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Provinces_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ADM1_PT': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CoastalDistricts_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DISTRITO': 'no label', 'Shape_Leng': 'no label', 'País': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_AdministrativePosts_3.set('fieldLabels', {'fid': 'no label', 'ADM3_PT': 'no label', 'ADM2_PT': 'no label', 'ADM1_PT': 'no label', 'ADM0_PT': 'no label', });
lyr_Bairros_aldeias_localidades_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'CodProv': 'no label', 'Provincia': 'no label', 'CodDist': 'no label', 'Distrito': 'no label', 'CodPost': 'no label', 'Posto': 'no label', 'CodLocal': 'no label', 'Localidade': 'no label', 'CodBairro': 'no label', 'Bairro': 'no label', 'TOTAL': 'no label', 'H': 'no label', 'M': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Inhambaneprovinceboundaries_5.set('fieldLabels', {'fid': 'no label', 'ADM1_PT': 'no label', });
lyr_Settlements_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FID_1': 'no label', 'Sett_Name': 'no label', 'F_CLASS': 'no label', 'F_DESIG': 'no label', 'ADM1_Old': 'no label', 'ADM2_Old': 'no label', 'Country': 'no label', 'ISO3': 'no label', 'ADM1_Name': 'no label', 'ADM1_Code': 'no label', 'ADM1_ID': 'no label', 'ADM2_Name': 'no label', 'ADM2_Code': 'no label', 'ADM2_ID': 'no label', 'ADM3_Name': 'no label', 'ADM3_Code': 'no label', 'ADM3_ID': 'no label', 'ADM3_Type': 'no label', 'ADM3_TypeE': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NaturalHazardAreas_10.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRITO': 'no label', 'COPROV': 'no label', 'CODIS_Nbr': 'no label', 'PROVINCIA': 'no label', 'FloodClass': 'no label', 'Dr_Class': 'no label', 'Cy_Class': 'no label', 'NS_Risk': 'no label', 'NS_Class': 'no label', 'NS_Text': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Populatedplacespolygons_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'place': 'no label', 'landuse': 'no label', 'population': 'no label', 'is_in': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_PopulatedPlacesPoints_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'place': 'no label', 'landuse': 'no label', 'population': 'no label', 'is_in': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_MajorCities_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'TOP250G_': 'no label', 'TOP250G_ID': 'no label', 'TIPO_TOP': 'no label', 'TOPONIMO': 'no label', 'ID_OPER': 'no label', });
lyr_Villages_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOME': 'no label', 'TOTAL': 'no label', 'MASCULINO': 'no label', 'FEMININO': 'no label', 'AGREGADOS': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'CODIGO_CEN': 'no label', });
lyr_Financialservicespoints_15.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'operator': 'no label', 'network': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Fishingcenters_16.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CENTROS_PE': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_Poverty_17.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ADM250G_': 'no label', 'ADM250G_ID': 'no label', 'DISTRITO': 'no label', 'PROVINCIA': 'no label', 'Num_Pobres': 'no label', 'Pop_07': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Airportspolygons_18.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'aeroway': 'no label', 'building': 'no label', 'emergency': 'no label', 'emergency_': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Airportslines_19.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'aeroway': 'no label', 'building': 'no label', 'emergency': 'no label', 'emergency_': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', });
lyr_Roads_1_20.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ESTRADA': 'no label', 'ENOVA': 'no label', 'PROV': 'no label', 'TROçO': 'no label', 'SEQUêNCIA': 'no label', 'DIST1': 'no label', 'S_FIC': 'no label', 'COND': 'no label', 'CODE': 'no label', 'MANUT96': 'no label', 'TR94': 'no label', 'SADC': 'no label', 'C_VIAK': 'no label', 'D_PAIS': 'no label', 'T_VELHO': 'no label', 'LOCAL_I': 'no label', 'LOCAL_F': 'no label', 'NOD_I': 'no label', 'NOD_F': 'no label', 'CRUZ_I': 'no label', 'CRUZ_F': 'no label', 'LEVANTADO': 'no label', 'TYPE': 'no label', 'ROADNO': 'no label', 'PAVEDTYPE': 'no label', 'ID': 'no label', 'NEWNO': 'no label', 'ROAD_NAME': 'no label', 'REASON': 'no label', 'PROVINCIA': 'no label', 'OLDID': 'no label', 'OLDTYPE': 'no label', 'UNCONTYPE': 'no label', 'UNCON_NAME': 'no label', 'LENGTH': 'no label', 'TYPEQUAL': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', });
lyr_Roads_21.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'osmid': 'no label', 'name': 'no label', 'highway': 'no label', 'ref': 'no label', 'country': 'no label', 'city': 'no label', 'street': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'sidewalk': 'no label', 'cycleway': 'no label', 'ford': 'no label', 'incline': 'no label', 'junction': 'no label', 'lit': 'no label', 'surface': 'no label', 'tracktype': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', });
lyr_Seaportslines_22.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'building': 'no label', 'port': 'no label', 'operator_t': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', });
lyr_Seaportspoints_23.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'building': 'no label', 'port': 'no label', 'operator_t': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Ports_24.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'TOP250G_': 'no label', 'TOP250G_ID': 'no label', 'TIPO_TOP': 'no label', 'TOPONIMO': 'no label', 'ID_OPER': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', });
lyr_TransportationUseRoads_25.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', 'Shape__Len': 'no label', 'Shape_Length': 'no label', });
lyr_Airportspoints_26.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'aeroway': 'no label', 'building': 'no label', 'emergency': 'no label', 'emergency_': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_TelecommunicationTowers_27.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CELLNAME': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', });
lyr_Pointsofinterest_28.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'man_made': 'no label', 'shop': 'no label', 'tourism': 'no label', 'opening_ho': 'no label', 'beds': 'no label', 'rooms': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_MarineAquaculturePotentialDistricts_29.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DISTRITO': 'no label', 'Shape_Leng': 'no label', 'País': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_UpperGroundwaterAquifers_30.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'AGUA_': 'no label', 'CAPTA': 'no label', 'CREA': 'no label', 'SRMBOLO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ClimateTypes_31.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FIRST_SIMB': 'no label', 'FIRST_TIPO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_KppenClimateClassification_32.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FIRST_SIMB': 'no label', 'FIRST_TIPO': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_HydrocarbonConcessions_2_33.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'CONCE_NAME': 'no label', 'Area__ha_': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_HydrocarbonConcessions_1_34.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Concession': 'no label', 'OBJECTID_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MiningConcessions2018_35.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Código': 'no label', 'Particip': 'no label', 'Tipo': 'no label', 'Interess': 'no label', 'Substânc': 'no label', 'Grupo_de': 'no label', 'Estado': 'no label', 'Região': 'no label', 'Data_de_': 'no label', 'Data_de1': 'no label', 'Data_de2': 'no label', 'Área': 'no label', 'Referênc': 'no label', 'guidShap': 'no label', 'guidLice': 'no label', 'PartName': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MiningConcessions2011_36.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OID_': 'no label', 'License': 'no label', 'LicenseSuf': 'no label', 'OldLicense': 'no label', 'LicenseTyp': 'no label', 'LicenseSta': 'no label', 'LicenseSub': 'no label', 'DateGrante': 'no label', 'DateApplic': 'no label', 'DateExpiry': 'no label', 'LicenseHol': 'no label', 'Minerals': 'no label', 'PrimaryOff': 'no label', 'Province': 'no label', 'District': 'no label', 'CadastralU': 'no label', 'ValidYears': 'no label', 'AreaHectar': 'no label', 'NewLaw': 'no label', 'shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MiningConcessions2006_37.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OID_': 'no label', 'License': 'no label', 'LicenseSuf': 'no label', 'OldLicense': 'no label', 'LicenseTyp': 'no label', 'LicenseSta': 'no label', 'LicenseSub': 'no label', 'DateGrante': 'no label', 'DateApplic': 'no label', 'DateExpiry': 'no label', 'LicenseHol': 'no label', 'Minerals': 'no label', 'PrimaryOff': 'no label', 'Province': 'no label', 'District': 'no label', 'CadastralU': 'no label', 'ValidYears': 'no label', 'AreaHectar': 'no label', 'NewLaw': 'no label', 'shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FreshwaterAquaculturePotentialDistricts_38.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DISTRITO': 'no label', 'Shape_Leng': 'no label', 'País': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_EcoregionsBiomes_39.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ECO_NAME': 'no label', 'BIOME_NUM': 'no label', 'BIOME_NAME': 'no label', 'REALM': 'no label', 'ECO_BIOME_': 'no label', 'NNH': 'no label', 'ECO_ID': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'NNH_NAME': 'no label', 'COLOR': 'no label', 'COLOR_BIO': 'no label', 'COLOR_NNH': 'no label', 'LICENSE': 'no label', });
lyr_Ecoregions_40.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ECO_NAME': 'no label', 'REALM': 'no label', 'BIOME': 'no label', 'ECO_NUM': 'no label', 'ECO_ID': 'no label', 'ECO_SYM': 'no label', 'GBL_STAT': 'no label', 'G200_REGIO': 'no label', 'G200_NUM': 'no label', 'G200_BIOME': 'no label', 'G200_STAT': 'no label', 'Shape_Leng': 'no label', 'area_km2': 'no label', 'eco_code': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_AgroEcologicalZones_41.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ECOLBL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Flora_42.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FID_Flora_': 'no label', 'flora_FZ_C': 'no label', 'floralegen': 'no label', 'floraleg_1': 'no label', 'FID_Provin': 'no label', 'PROVINCIA': 'no label', 'COUNT': 'no label', 'SUM_AREA': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FreshwaterEcoregions_43.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ECO_ID': 'no label', 'ECOREGION': 'no label', 'MHT_TXT': 'no label', 'MHT_NO': 'no label', 'OLD_ID': 'no label', 'ECO_ID_U': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MarineEcoregions_44.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ECO_CODE': 'no label', 'ECOREGION': 'no label', 'PROV_CODE': 'no label', 'PROVINCE': 'no label', 'RLM_CODE': 'no label', 'REALM': 'no label', 'ALT_CODE': 'no label', 'ECO_CODE_X': 'no label', 'Lat_Zone': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_TerrestrialEcoregions_45.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ECO_ID_U': 'no label', 'ECO_CODE': 'no label', 'ECO_NAME': 'no label', 'ECO_NUM': 'no label', 'ECODE_NAME': 'no label', 'CLS_CODE': 'no label', 'ECO_NOTES': 'no label', 'WWF_REALM': 'no label', 'WWF_REALM2': 'no label', 'WWF_MHTNUM': 'no label', 'WWF_MHTNAM': 'no label', 'RealmMHT': 'no label', 'ER_UPDATE': 'no label', 'ER_DATE_U': 'no label', 'ER_RATION': 'no label', 'SOURCEDATA': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ConservationAreas_46.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Nome': 'no label', 'Name': 'no label', 'Categoria': 'no label', 'Areahectar': 'no label', 'layer': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ReservasNacionais_47.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Designatio': 'no label', 'IUCN': 'no label', 'Country': 'no label', 'Size_ha': 'no label', 'Hist_date': 'no label', 'PPF_MD': 'no label', 'WDPA_MD': 'no label', 'Desig_ha': 'no label', 'Event': 'no label', 'First_Desi': 'no label', 'Edit_date': 'no label', 'Owner': 'no label', 'Tenure': 'no label', 'Hectares': 'no label', 'Perimeter': 'no label', 'ed_Comment': 'no label', 'ed_Comme_1': 'no label', 'ed_Comme_2': 'no label', 'ORIG_FID': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', 'ID': 'no label', 'NOMES': 'no label', 'AREA_KILOM': 'no label', 'PERIMETER_': 'no label', 'AREA_HA': 'no label', 'PROVíNCIA': 'no label', 'ACRES': 'no label', 'AREA': 'no label', 'TYPE': 'no label', 'OPERATOR': 'no label', 'LEASE_FEE': 'no label', 'AREANAME': 'no label', 'ISO3': 'no label', 'LAT': 'no label', 'LON': 'no label', 'DESIGNATE': 'no label', 'GISNAME': 'no label', 'SOURCE_ID': 'no label', 'IUCNCAT': 'no label', 'STATUS': 'no label', 'SITE_CODE': 'no label', 'MARINE': 'no label', 'ADMIN': 'no label', 'MANAGEMENT': 'no label', 'EST_DATE': 'no label', 'NOTES': 'no label', 'SOURCE': 'no label', 'TITLE': 'no label', 'SOURCE_DES': 'no label', 'YEAR': 'no label', 'SCALE': 'no label', 'DATUM': 'no label', 'COMMENT': 'no label', 'ORIGIN_ID': 'no label', 'PUBLISHER': 'no label', 'APPROX_YR': 'no label', 'PROJECT': 'no label', 'DETIALS': 'no label', 'GIS_HA': 'no label', 'Ponto': 'no label', 'X': 'no label', 'Y': 'no label', 'FID_Niassa': 'no label', 'DISTRITO': 'no label', 'BUFF_DIST': 'no label', 'FID_land_B': 'no label', 'DISTRITO_1': 'no label', 'Name_1': 'no label', 'BUFF_DIST_': 'no label', 'Shape_Leng': 'no label', 'RESG_': 'no label', 'RESG_ID': 'no label', 'TIPO_RES': 'no label', 'TOPONIMO': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ThreatenedorCriticalEcosystems_48.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Nome': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_AreasofEndemism_49.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'Priority_s': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_AreasofHighScientificValue_50.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MigratorySpeciesHabitat_51.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_GlobalCoralReefs_52.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'GRIDCODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MarineHabitatsandCorals_53.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Code': 'no label', 'Descriptio': 'no label', 'Area_SqKm_': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_DugongHabitats_54.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_AreasofKeyEvolutionaryProcesses_55.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_EndemicSpeciesHabitats_56.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Nome': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_IFCHabitatCategories_57.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IFC': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_KeyBiodiversityAreas_58.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'KBA_Name': 'no label', 'Country': 'no label', 'Region': 'no label', 'KBA_Area': 'no label', 'Trigger_BD': 'no label', 'Created_By': 'no label', 'Threats': 'no label', 'KBA_Criter': 'no label', 'Del_text': 'no label', 'layer': 'no label', 'path': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MarineHabitats_59.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Categoria': 'no label', 'Nome': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MozambiqueMangroves_60.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'grid_code': 'no label', 'ISO3': 'no label', 'PARISO3': 'no label', 'CTYPE': 'no label', 'AREA_KM2': 'no label', 'AREA_M2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MangrovesWWF2018_61.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Class': 'no label', 'Area_ha': 'no label', 'Mang_1995': 'no label', 'Mang_2000': 'no label', 'Mang_2005': 'no label', 'Mang_2010': 'no label', 'Mang_2015': 'no label', 'Mang_2018': 'no label', 'Dynamic': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MangrovesUEM2013_62.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MangrovesRCMDR2015_63.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CLASS_NAME': 'no label', 'AREA': 'no label', 'AREA_KM2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MangrovesDIRF_64.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID': 'no label', 'LC_PRI': 'no label', 'LC_SEC': 'no label', 'LC_TER': 'no label', 'NOTE_': 'no label', 'AUTOR': 'no label', 'LC_PRI_PER': 'no label', 'LC_SEC_PER': 'no label', 'LC_TER_PER': 'no label', 'HECTARES': 'no label', 'POLY_ID': 'no label', 'OBJECTID_1': 'no label', 'LC_PRI_1': 'no label', 'LC_DESCRIP': 'no label', 'RECLASS1': 'no label', 'RECLASS2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2020_65.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2019_66.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2018_67.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2017_68.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2016_69.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2015_70.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2010_71.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2009_72.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2008_73.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves2007_74.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Mangroves1996_75.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PXLVAL': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_BiodiversityHotspots_76.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Nome': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SaltmarshDistribution_77.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LAYER_NAME': 'no label', 'METADATA_I': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'LOC_DEF': 'no label', 'FAMILY': 'no label', 'GENUS': 'no label', 'SPECIES': 'no label', 'DATA_TYPE': 'no label', 'SURVEY_MET': 'no label', 'START_DATE': 'no label', 'END_DATE': 'no label', 'DATE_TYPE': 'no label', 'VERIF': 'no label', 'GIS_AREA_K': 'no label', 'Shape_Leng': 'no label', 'REP_AREA_K': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SeagrassPolygons_78.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'datasetID': 'no label', 'BIO_CLASS': 'no label', 'fieldNotes': 'no label', 'habitat': 'no label', 'AREA_SQKM': 'no label', 'vernacular': 'no label', 'FAMILY': 'no label', 'GENUS': 'no label', 'scientific': 'no label', 'habitatID': 'no label', 'nameAccord': 'no label', 'eventDate': 'no label', 'verif': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MozambiqueCoralReefs_79.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'COV_TYPE': 'no label', 'RB_ATTRIB': 'no label', 'RB_CODE': 'no label', 'RB_DEPTH_C': 'no label', 'RB_DEPTH_A': 'no label', 'ISO3_1': 'no label', 'REEF_NAM_1': 'no label', 'ISLAND_N_1': 'no label', 'COUNTRY_1': 'no label', 'SOVEREIG_1': 'no label', 'SOURCE_ID': 'no label', 'DC_TITLE': 'no label', 'DESCRIPTIO': 'no label', 'TO_DATE': 'no label', 'FROM_DATE': 'no label', 'NOM_SCALE': 'no label', 'AUDIT': 'no label', 'PUBLISHER': 'no label', 'CITATION': 'no label', 'PUB_DATE': 'no label', 'NOTES': 'no label', 'AREA_KM2': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_WarmWaterCoralReefs2018_80.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LAYER_NAME': 'no label', 'METADATA_I': 'no label', 'ORIG_NAME': 'no label', 'FAMILY': 'no label', 'GENUS': 'no label', 'SPECIES': 'no label', 'DATA_TYPE': 'no label', 'START_DATE': 'no label', 'END_DATE': 'no label', 'DATE_TYPE': 'no label', 'VERIF': 'no label', 'NAME': 'no label', 'LOC_DEF': 'no label', 'SURVEY_MET': 'no label', 'GIS_AREA_K': 'no label', 'Shape_Leng': 'no label', 'REP_AREA_K': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ColdWaterCoralReefs2017_81.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LAYER_NAME': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'LOC_DEF': 'no label', 'FAMILY': 'no label', 'GENUS': 'no label', 'SPECIES': 'no label', 'DATA_TYPE': 'no label', 'START_DATE': 'no label', 'END_DATE': 'no label', 'DATE_TYPE': 'no label', 'VERIF': 'no label', 'SURVEY_MET': 'no label', 'METADATA_I': 'no label', 'GIS_AREA_K': 'no label', 'Shape_Leng': 'no label', 'REP_AREA_K': 'no label', 'DEPTH_MIN': 'no label', 'DEPTH_MAX': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CoralReefs_82.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CORAL_': 'no label', 'CORAL_ID': 'no label', 'NAME': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ImportantSharkandRayAreas_83.set('fieldLabels', {'fid': 'no label', 'isra_code': 'no label', 'Status': 'no label', 'Name': 'no label', 'Jurisdicti': 'no label', 'Region': 'no label', 'Criteria': 'no label', 'Subcriteri': 'no label', 'QueryCrite': 'no label', 'QuerySubcr': 'no label', 'MinDepth': 'no label', 'MaxDepth': 'no label', 'Order_': 'no label', 'Family': 'no label', 'URL': 'no label', });
lyr_SeagrassPolygons_84.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'datasetID': 'no label', 'BIO_CLASS': 'no label', 'fieldNotes': 'no label', 'habitat': 'no label', 'AREA_SQKM': 'no label', 'vernacular': 'no label', 'FAMILY': 'no label', 'GENUS': 'no label', 'scientific': 'no label', 'habitatID': 'no label', 'nameAccord': 'no label', 'eventDate': 'no label', 'verif': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SeagrassPoints_85.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'datasetID': 'no label', 'FAMILY': 'no label', 'GENUS': 'no label', 'scientific': 'no label', 'VERIF': 'no label', 'REP_AREA_K': 'no label', 'eventDate': 'no label', });
lyr_ImportantBirdAreas_86.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'Y_DEG': 'no label', 'Y_MIN': 'no label', 'X_DEG': 'no label', 'X_MIN': 'no label', 'YEAR': 'no label', 'Y_DD': 'no label', 'X_DD': 'no label', });
lyr_TurtleNestingSites_87.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Nome': 'no label', 'Shape_Length': 'no label', });
lyr_Deforestation_geonode_20160623_88.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'DISTRITO': 'no label', 'COPROV': 'no label', 'CODIS_Nbr': 'no label', 'PROVINCIA': 'no label', 'ICA_Areas': 'no label', 'ICA_Categ': 'no label', 'VAC_Areas': 'no label', 'VAC_Categ': 'no label', 'SETS_Areas': 'no label', 'SETS_Categ': 'no label', 'AreaKm2': 'no label', 'TCLossArea': 'no label', 'TCLossPerc': 'no label', 'TCLossClas': 'no label', 'TCLossText': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Deforestation_2023_89.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'area_ha': 'no label', });
lyr_Deforestation_2022_90.set('fieldLabels', {'fid': 'no label', 'ADM3_PT': 'no label', 'ADM2_PT': 'no label', 'ADM1_PT': 'no label', 'gridcode': 'no label', 'area_ha': 'no label', });
lyr_Deforestation_2021_91.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'area': 'no label', 'hecta': 'no label', });
lyr_Deforestation_2020_92.set('fieldLabels', {'fid': 'no label', 'gridcode': 'no label', 'Area_ha': 'no label', 'ADM3_PT': 'no label', 'ADM2_PT': 'no label', 'ADM1_PT': 'no label', 'ADM0_PT': 'no label', });
lyr_Deforestation_2019_93.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'gridcode': 'no label', });
lyr_Deforestation_2018_94.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'gridcode': 'no label', });
lyr_Deforestation_2017_95.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'gridcode': 'no label', });
lyr_Soil_96.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'MOSOEQA': 'no label', 'AGRUP_SOLO': 'no label', 'CARC_DOMIN': 'no label', 'GEOM_GEOLO': 'no label', 'FORMA_TERR': 'no label', 'TOPOGRAFIA': 'no label', 'TEXTURA': 'no label', 'DRENAGEM': 'no label', 'PROFUNDI__': 'no label', 'ACIDEZ_ALC': 'no label', 'MATER_RGAN': 'no label', 'SAL_SUPERF': 'no label', 'SODIC_SUPE': 'no label', 'CLASS_FAO': 'no label', 'CLASS_USDA': 'no label', 'TIP_VEGETA': 'no label', 'PRINC_LIMI': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Geology_97.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'LITO_': 'no label', 'LITO_ID': 'no label', 'FORMAIDO': 'no label', 'CLASSE': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Erosion_98.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'EROSAO_ID': 'no label', 'CAT__DE_RI': 'no label', 'ACRES': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Healthfacilitiespolygons_99.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'building': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Healthfacilitiespoints_100.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'amenity': 'no label', 'building': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Healthfacilities_1_101.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'F1': 'no label', 'CP': 'no label', 'CD': 'no label', 'CUUS': 'no label', 'CT': 'no label', 'CMB': 'no label', 'US': 'no label', 'CC': 'no label', 'CNE': 'no label', 'LAT': 'no label', 'LON': 'no label', });
lyr_HealthFacilities_102.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'N_': 'no label', 'PROV_NCIA': 'no label', 'DISTRITO': 'no label', 'LOCALIZAþ_': 'no label', 'TIPO': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', });
lyr_Schools_103.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'Symbol': 'no label', 'Codigo': 'no label', 'CodZona': 'no label', 'CodProv': 'no label', 'Prov': 'no label', 'CodDist': 'no label', 'Distritos': 'no label', 'CodPost': 'no label', 'Posto': 'no label', 'CodLocal': 'no label', 'Localidade': 'no label', 'CodBairro': 'no label', 'Bairro': 'no label', 'CodAldeiaP': 'no label', 'Aldeia_Pov': 'no label', 'CodOutraZo': 'no label', 'OutraZona': 'no label', 'Data': 'no label', 'Num': 'no label', 'CodElement': 'no label', 'Elemento': 'no label', 'CodTipo': 'no label', 'Tipo': 'no label', 'Nome': 'no label', 'GPS_Tipo': 'no label', 'GPS': 'no label', 'Simbolo_do': 'no label', 'CodClassif': 'no label', 'Classifica': 'no label', 'Abreviat': 'no label', 'Ordem_Clas': 'no label', 'OrdemDesc': 'no label', 'CodOrd': 'no label', 'Ordem': 'no label', 'Cob': 'no label', 'Cobertura': 'no label', 'Pared': 'no label', 'Paredes': 'no label', 'Pav': 'no label', 'Pavimento': 'no label', 'Obs': 'no label', 'DataReg': 'no label', 'Aldeias': 'no label', 'Aldeia_e_N': 'no label', 'OutrasZona': 'no label', });
lyr_TertiarySchools_104.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ProvCodigo': 'no label', 'Provincia': 'no label', 'DistritoCo': 'no label', 'Distrito': 'no label', 'PostoCodig': 'no label', 'Posto': 'no label', 'LocalCodig': 'no label', 'Localidade': 'no label', 'BairroCodi': 'no label', 'Bairro': 'no label', 'Aldeia': 'no label', 'OutraZona': 'no label', 'Nome': 'no label', 'Classifica': 'no label', 'Classifi_1': 'no label', 'Abreviacao': 'no label', 'CoberturaC': 'no label', 'Cobertura': 'no label', 'ParedesCod': 'no label', 'Paredes': 'no label', 'PavimentoC': 'no label', 'Pavimento': 'no label', 'Notas': 'no label', });
lyr_SecondarySchools_105.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ProvCodigo': 'no label', 'Provincia': 'no label', 'DistritoCo': 'no label', 'Distrito': 'no label', 'PostoCodig': 'no label', 'Posto': 'no label', 'LocalCodig': 'no label', 'Localidade': 'no label', 'BairroCodi': 'no label', 'Bairro': 'no label', 'Aldeia': 'no label', 'OutraZona': 'no label', 'Nome': 'no label', 'Classifica': 'no label', 'Classifi_1': 'no label', 'Abreviacao': 'no label', 'CoberturaC': 'no label', 'Cobertura': 'no label', 'ParedesCod': 'no label', 'Paredes': 'no label', 'PavimentoC': 'no label', 'Pavimento': 'no label', 'Notas': 'no label', });
lyr_PrimarySchools_106.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ProvCodigo': 'no label', 'Provincia': 'no label', 'DistritoCo': 'no label', 'Distrito': 'no label', 'PostoCodig': 'no label', 'Posto': 'no label', 'LocalCodig': 'no label', 'Localidade': 'no label', 'BairroCodi': 'no label', 'Bairro': 'no label', 'Aldeia': 'no label', 'OutraZona': 'no label', 'Nome': 'no label', 'Classifica': 'no label', 'Classifi_1': 'no label', 'Abreviacao': 'no label', 'CoberturaC': 'no label', 'Cobertura': 'no label', 'ParedesCod': 'no label', 'Paredes': 'no label', 'PavimentoC': 'no label', 'Pavimento': 'no label', 'Notas': 'no label', });
lyr_LimitesCosteiros_107.set('fieldLabels', {'fid': 'no label', 'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DISTRITO': 'no label', 'Shape_Leng': 'no label', 'País': 'no label', 'BUFF_DIST': 'no label', 'Shape_Le_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ExclusiveEconomicZone_108.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'MRGID': 'no label', 'GeoName': 'no label', 'MRGID_Ter1': 'no label', 'Pol_type': 'no label', 'MRGID_Sov1': 'no label', 'Territory1': 'no label', 'ISO_Ter1': 'no label', 'Sovereign1': 'no label', 'MRGID_Ter2': 'no label', 'MRGID_Sov2': 'no label', 'Territory2': 'no label', 'ISO_Ter2': 'no label', 'Sovereign2': 'no label', 'MRGID_Ter3': 'no label', 'MRGID_Sov3': 'no label', 'Territory3': 'no label', 'ISO_Ter3': 'no label', 'Sovereign3': 'no label', 'x_1': 'no label', 'y_1': 'no label', 'MRGID_EEZ': 'no label', 'Area_km2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Concessoesflorestais_109.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LATDD': 'no label', 'LONDD': 'no label', 'PERIMETER': 'no label', 'AREA': 'no label', 'AREA___HA_': 'no label', 'EMPRESA': 'no label', 'DISTRITO': 'no label', 'DREA_NO_CR': 'no label', 'OBS': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_LakesandFloodedAreas_110.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'AREA_KM2': 'no label', 'PER_KM': 'no label', 'HID250G_': 'no label', 'HID250G_ID': 'no label', 'TIPO_RIO': 'no label', 'TOPONIMO': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Waterwayspolygons_111.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Waterwayslines_112.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_pt': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Shape_Length': 'no label', });
lyr_CoastlineHydrology1250K_113.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'RioTipo': 'no label', 'RioOrdem': 'no label', 'Rio': 'no label', 'Shape_STLe': 'no label', });
lyr_Rios_114.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'HID250G_': 'no label', 'HID250G_ID': 'no label', 'TIPO_RIO': 'no label', 'ORDEM': 'no label', 'TOPONIMO': 'no label', 'ID_OPER': 'no label', 'Shape_Length': 'no label', });
lyr_DrainageBasin_1_115.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'NOME': 'no label', 'AREA_KM2': 'no label', 'PERIM_KM': 'no label', 'ZMIN': 'no label', 'ZMAX': 'no label', 'ZMEDIO': 'no label', 'ZMEDIAN': 'no label', 'ZRANGE': 'no label', 'ZCOEFVAR': 'no label', 'ZSTDDEV': 'no label', 'RIOS_KM': 'no label', 'SLOPEMIN': 'no label', 'SLOPEMAX': 'no label', 'SLOPEMEDIO': 'no label', 'SLOPEMEDIA': 'no label', 'SLOPERANGE': 'no label', 'SLOPECOEFV': 'no label', 'SLOPESTDDE': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_DrainageBasin_116.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NR': 'no label', 'IDENT': 'no label', 'SIGLA': 'no label', 'NOME': 'no label', 'AREA_MOC_2': 'no label', 'AREA_TOT_2': 'no label', 'COMP_MOC_K': 'no label', 'COMP_TOT_K': 'no label', 'CODIGO_WMO': 'no label', 'ARA': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Bathymetry_117.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'VALOR': 'no label', 'Shape_Length': 'no label', });
lyr_ExclusiveEconomicZone_118.set('fieldLabels', {'OBJECTID': 'no label', 'Line_ID': 'no label', 'Line_name': 'no label', 'Line_type': 'no label', 'MRGID_Sov1': 'no label', 'MRGID_Ter1': 'no label', 'Territory1': 'no label', 'Sovereign1': 'no label', 'MRGID_Ter2': 'no label', 'Territory2': 'no label', 'MRGID_Sov2': 'no label', 'Sovereign2': 'no label', 'MRGID_EEZ1': 'no label', 'EEZ1': 'no label', 'MRGID_EEZ2': 'no label', 'EEZ2': 'no label', 'Source1': 'no label', 'URL1': 'no label', 'Source2': 'no label', 'URL2': 'no label', 'Source3': 'no label', 'URL3': 'no label', 'Origin': 'no label', 'Doc_date': 'no label', 'MRGID_JReg': 'no label', 'Joint_reg': 'no label', 'Length_km': 'no label', 'Shape_Length': 'no label', });
lyr_EnergyInfrastructure_119.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'LineColor': 'no label', 'Shape_Length': 'no label', });
lyr_EnergyInfrastructure_119.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});