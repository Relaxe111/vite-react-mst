import React from "react";
import type { DocRenderer } from "../../types";
import ImageProxyRenderer from "../image";

const JPGRenderer: DocRenderer = (props) => <ImageProxyRenderer {...props} />;

JPGRenderer.fileTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg"];
JPGRenderer.weight = 0;

export default JPGRenderer;
