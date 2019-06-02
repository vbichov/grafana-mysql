/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { CanvasPanelCtrl } from './canvas-metric';
import { DistinctPoints } from './distinct-points';
declare class DiscretePanelCtrl extends CanvasPanelCtrl {
    annotationsSrv: any;
    static templateUrl: string;
    static scrollable: boolean;
    defaults: {
        display: string;
        rowHeight: number;
        valueMaps: {
            value: string;
            op: string;
            text: string;
        }[];
        rangeMaps: {
            from: string;
            to: string;
            text: string;
        }[];
        colorMaps: {
            text: string;
            color: string;
        }[];
        metricNameColor: string;
        valueTextColor: string;
        timeTextColor: string;
        crosshairColor: string;
        backgroundColor: string;
        lineColor: string;
        textSize: number;
        textSizeTime: number;
        extendLastValue: boolean;
        writeLastValue: boolean;
        writeAllValues: boolean;
        writeMetricNames: boolean;
        showTimeAxis: boolean;
        showLegend: boolean;
        showLegendNames: boolean;
        showLegendValues: boolean;
        showLegendPercent: boolean;
        highlightOnMouseover: boolean;
        expandFromQueryS: number;
        legendSortBy: string;
        units: string;
    };
    annotations: any;
    data: DistinctPoints[];
    legend: DistinctPoints[];
    externalPT: boolean;
    isTimeline: boolean;
    isStacked: boolean;
    hoverPoint: any;
    colorMap: any;
    unitFormats: any;
    formatter: any;
    _colorsPaleteCash: any;
    _renderDimensions: any;
    _selectionMatrix: Array<Array<String>>;
    constructor($scope: any, $injector: any, annotationsSrv: any);
    onPanelInitialized(): void;
    onDataSnapshotLoad(snapshotData: any): void;
    onDataError(err: any): void;
    onInitEditMode(): void;
    onRender(): void;
    showLegandTooltip(pos: any, info: any): void;
    clearTT(): void;
    formatValue(val: any): string;
    getColor(val: any): any;
    randomColor(): string;
    applyPanelTimeOverrides(): void;
    onDataReceived(dataList: any): void;
    updateLegendMetrics(notify?: boolean): void;
    removeColorMap(map: any): void;
    updateColorInfo(): void;
    addColorMap(what: any): void;
    removeValueMap(map: any): void;
    addValueMap(): void;
    removeRangeMap(rangeMap: any): void;
    addRangeMap(): void;
    onConfigChanged(update?: boolean): void;
    getLegendDisplay(info: any, metric: any): any;
    showTooltip(evt: any, point: any, isExternal: any): void;
    onGraphHover(evt: any, showTT: any, isExternal: any): void;
    onMouseClicked(where: any, event: any): void;
    onMouseSelectedRange(range: any, event: any): void;
    clear(): void;
    _updateRenderDimensions(): void;
    _updateSelectionMatrix(): void;
    _updateCanvasSize(): void;
    _getVal(metricIndex: any, rectIndex: any): any;
    _renderRects(): void;
    _renderLabels(): void;
    _renderSelection(): void;
    _renderTimeAxis(): void;
    _renderCrosshair(): void;
    _renderAnnotations(): void;
    _drawVertical(ctx: any, timeVal: any, min: any, max: any, headerColumnIndent: any, top: any, width: any, isAlert: any): void;
}
export { DiscretePanelCtrl as PanelCtrl };
