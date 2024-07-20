export interface Activity {
    id?: number;
    title?: string;
    points: number[][];
    lastTimeUsedForDistance?: number;
    accumulatedDistance?: number;
    pace?: number;
    hr?: number;
    averagePace?: string;
    timeDisplay?: string;
    startDateTime?: Date;
    visible?: boolean;
}