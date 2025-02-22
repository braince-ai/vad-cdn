interface ResamplerOptions {
    nativeSampleRate: number;
    targetSampleRate: number;
    targetFrameSize: number;
}
export declare class Resampler {
    options: ResamplerOptions;
    inputBuffer: Array<number>;
    private lastFilteredValue;
    private readonly FILTER_COEFFICIENT;
    constructor(options: ResamplerOptions);
    process: (audioFrame: Float32Array) => Float32Array[];
    stream(audioInput: Float32Array): AsyncGenerator<Float32Array, void, unknown>;
    private hasEnoughDataForFrame;
    private lowPassFilter;
    private generateOutputFrame;
}
export {};
//# sourceMappingURL=resampler.d.ts.map