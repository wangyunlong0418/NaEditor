import React from 'react';

import Module from '../Module';
import { IModuleData, HotspotInfo } from '../interface';
import { ImageInfo } from '../ImageHotspotConfig/interface';
import Hotspot from '../Hotspot';

interface ImageHotspotProps {
    moduleData: IModuleData;
}

interface ImageHotspotState {
    imgs: ImageInfo[];
}

export default class ImageHotspot extends React.Component<ImageHotspotProps, ImageHotspotState> {
    constructor(props: ImageHotspotProps) {
        super(props);
        const { imgs } = props.moduleData.data;
        this.state = {
            imgs,
        };
    }

    renderImgs = (imgs: ImageInfo[]) => {
        return (
            imgs.map((v, i) => (
                <div key={i} className="d-img-wrap">
                    <img src={v.url} />
                </div>
            ))
        );
    }

    renderHotspots = (Hotspot: HotspotInfo[]) => {
        return (
            <a href="baidu.com" />
        )
    }

    render() {
        let {
            moduleData,
            moduleData: {
                data: {
                    imgs,
                    hotspots,
                },
            },
        } = this.props;

        if (imgs === undefined) {
            imgs = [];
        }
        return (
            <Module moduleData={moduleData}>
                {this.renderImgs(imgs)}
                {this.renderHotspots(hotspots)}
            </ Module>
        );
    }
}