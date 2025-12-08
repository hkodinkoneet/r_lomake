"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Electrolux.module.css";

export function Electrolux({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "motto-wrap")} tag="div" />
      <_Builtin.Block
        className={_utils.cx(_styles, "text-content-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "collection-item")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-36")}
            id={_utils.cx(
              _styles,
              "w-node-a31770e9-1943-a651-f158-9a3d2607df4f-2607df4b"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home-section-wrap")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "section-heading")}
                id={_utils.cx(
                  _styles,
                  "w-node-a31770e9-1943-a651-f158-9a3d2607df51-2607df4b"
                )}
                tag="h3"
              >
                {"Rosenlew-tuotteiden huolto"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-4")}>
                {
                  "Rosenlew julkistaa uuden malliston keväällä 2025. Tällä hetkellä markkinoilla myytävät ja aiemmin ostetut Rosenlew-tuotteet kuuluvat Electroluxin huollon piiriin. "
                }
                <br />
                {
                  "Lisätietoja Rosenlewin varaosista ja tarvikkeista löydät seuraavalta sivulta: "
                }
                <_Builtin.Link
                  className={_utils.cx(_styles, "")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                    target: "_blank",
                  }}
                >
                  {"https://shop.electrolux.fi/rosenlew."}
                </_Builtin.Link>
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
