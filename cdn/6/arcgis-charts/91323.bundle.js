/*! For license information please see 91323.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[91323],{91323:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>g,anyOfValues:()=>$,bubbleChartValidateMsg:()=>f,default:()=>I,defaultError:()=>o,defaultInvalidChart:()=>s,duplicateSeriesID:()=>u,enumValues:()=>C,gaugeCannotExceedLimit:()=>S,histogramEmptyField:()=>k,invalidSeriesType:()=>L,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>V,lineChartSeriesAndMarkersCannotExceedLimit:()=>E,maxItems:()=>y,minItems:()=>c,minLength:()=>v,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>h,or:()=>P,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>x,pieChartSlicesCannotExceedLimit:()=>z,queryError:()=>j,requiredProperty:()=>p,threePlusSeriesBarCountCannotExceedLimit:()=>r,twoSeriesBarCountCannotExceedLimit:()=>i,uniqueSeriesBarCountCannotExceedLimit:()=>n,whiteSpacePattern:()=>b});const o="Při načítání grafu došlo k chybě.",n="V tomto grafu je celkem ${ elementCount } sloupců. Pruhové grafy s jednou řadou mohou mít maximálně ${ totalLimit } pruhů. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",i="Pruhové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",r="Pruhové grafy se třemi a více řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",s="Při vytváření grafu došlo k chybě.",l="Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",d="Nelze uplatnit transformaci odmocniny na záporné hodnoty.",m="Při načítání vrstvy došlo k chybě. URL = ${ url }. ID položky portálu = ${ portalItemId }.",u="${ dataPath } musí být jedinečné. Řada s názvem ${ seriesName } má ID (${ seriesID }), které již používá jiná řada.",h="${ dataPath } nemůže provádět jiné seskupení než podle počtu na jiném než numerickém poli.",p="V ${ dataPath } chybí vlastnost s názvem ${ missingProperty }.",v="${ dataPath } nesmí být kratší než ${ limit } znaků.",c="${ dataPath } nesmí obsahovat méně než ${ limit } položek.",y="${ dataPath } nesmí obsahovat více než ${ limit } položek.",b="${ dataPath } musí obsahovat alespoň jeden znak jiný než mezera.",g="${ dataPath } nesmí obsahovat ${ additionalProperty }.",C="${ dataPath } se musí rovnat jedné z těchto povolených hodnot: ${ allowedValues }.",$="${ dataPath } se musí shodovat s jedním z těchto schémat: ${ schemaOptions }.",f="Rozptýlené bodové grafy s proporcionálními symboly nejsou podporovány. Byla použita výchozí velikost symbolu.",j="Vstupní data se nepodařilo přečíst.",k="Histogramy vyžadují alespoň dvě číselné hodnoty.",L="Očekávaný typ řady s indexem ${ seriesIndex } je '${ expectedType }', ale obdrželi jsme '${ receivedType }'",P="nebo",x="Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",z="V tomto grafu je celkem ${ sliceCount } výsečí. Koláčové grafy jsou omezeny na ${ totalLimit } výseče. Vyberte pole Kategorie s menším počtem jedinečných hodnot, přidejte méně číselných polí nebo použijte na data filtr.",S="Měřiče založené na prvcích jsou omezeny na počet ${ totalLimit } prvků. Filtrujte data.",E="V tomto grafu je celkem ${ seriesCount } sérií a ${ elementCount } datových bodů. Liniové grafy jsou limitované na ${ seriesLimit } série a ${ totalLimit } datové body. Snížit počet sérií a/nebo znovu seskupit nebo filtrovat data.",V="Liniové grafy jsou limitované na ${ totalLimit } datové body. Filtrujte nebo znovu agregujte svá data a zkuste to znovu.",I={defaultError:"Při načítání grafu došlo k chybě.",uniqueSeriesBarCountCannotExceedLimit:n,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Při vytváření grafu došlo k chybě.",negativeValueInDataForLogTransformation:"Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",negativeValueInDataForSqrtTransformation:"Nelze uplatnit transformaci odmocniny na záporné hodnoty.",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:h,requiredProperty:p,minLength:v,minItems:c,maxItems:y,whiteSpacePattern:b,additionalProperty:"${ dataPath } nesmí obsahovat ${ additionalProperty }.",enumValues:C,anyOfValues:$,bubbleChartValidateMsg:f,queryError:j,histogramEmptyField:"Histogramy vyžadují alespoň dvě číselné hodnoty.",invalidSeriesType:L,or:"nebo",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",pieChartSlicesCannotExceedLimit:z,gaugeCannotExceedLimit:S,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:V}}}]);