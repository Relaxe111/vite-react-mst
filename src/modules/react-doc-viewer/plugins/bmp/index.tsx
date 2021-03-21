import React from "react";
import type { DocRenderer } from "../../types";
import ImageProxyRenderer from "../image";

const BMPRenderer: DocRenderer = (props) => <ImageProxyRenderer {...props} />;
BMPRenderer.fileTypes = ["bmp", "image/bmp"];
BMPRenderer.weight = 0;

export default BMPRenderer;
