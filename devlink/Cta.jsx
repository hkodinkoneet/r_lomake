"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

export function Cta({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "cc-cta")}
      tag="div"
      id="pysy-kuulolla"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-content-wrap")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "cta-text")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cta-heading")}
                tag="div"
              >
                {"Pysy kuulolla"}
                <br />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "paragraph-bigger")}
                tag="div"
              >
                {
                  "Tilaa uutiskirje ja kuule Rosenlewin uusista tuotteista ensimmäisten joukossa."
                }
                <br />
              </_Builtin.Block>
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "uui-cta10_form")}
              >
                <_Builtin.FormForm
                  className={_utils.cx(_styles, "uui-form_component")}
                  name="wf-form-Uutiskirjeen-tilaus"
                  data-name="Uutiskirjeen tilaus"
                  method="get"
                  id="wf-form-Uutiskirjeen-tilaus"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "uui-signup-form_wrapper")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "uui-form_input")}
                      name="email-2"
                      maxLength={256}
                      data-name="Email 2"
                      placeholder="sähköpostiosoite"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      id="email-2"
                    />
                    <_Builtin.FormButton
                      className={_utils.cx(
                        _styles,
                        "primary-button",
                        "cc-jumbo-button"
                      )}
                      type="submit"
                      value="Tilaa uutiskirje"
                      data-wait="pieni hetki..."
                    />
                  </_Builtin.Block>
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage
                  className={_utils.cx(_styles, "success-message")}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "success-text")}
                    tag="div"
                  >
                    {
                      "Kiitos tilauksesta! Uutisia odotettavissa kesän 2025 aikana."
                    }
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage
                  className={_utils.cx(_styles, "error-message")}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "error-text")}
                    tag="div"
                  >
                    {"Jokin meni pieleen..."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
