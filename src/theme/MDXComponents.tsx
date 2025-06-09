import React from "react";

/*
 * Default imported
*/

import MDXComponents from "@theme-original/MDXComponents"

import TitleImg from "@site/src/plugins/title-img/TitleImg"
import Tooltip from "@site/src/plugins/tooltip-content/Tooltip"
import ToggleContent from "@site/src/plugins/toggle-content/ToggleContent"

export default {
  ...MDXComponents, // Basic
  TitleImg, // Title image helper
  Tooltip, // Tooltip information helper
  ToggleContent // Toggle content on special button helper
}