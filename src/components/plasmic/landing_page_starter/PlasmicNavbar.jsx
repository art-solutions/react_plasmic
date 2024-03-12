// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tzfnvjdGSoPvRBYt36kabC
// Component: LnFKh-rgmAa5
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Logo from "../../Logo"; // plasmic-import: eBdyrJaTOP1g/component
import Button from "../../Button"; // plasmic-import: UcW2nQ3YUMuW/component
import { useScreenVariants as useScreenVariantsff52ShTm1YwH } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ff52shTm1ywH/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: tzfnvjdGSoPvRBYt36kabC/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: LnFKh-rgmAa5/css

createPlasmicElementProxy;

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

const $$ = {};

function PlasmicNavbar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsff52ShTm1YwH()
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ojPmU)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9LNcn)}
        >
          <Button
            className={classNames("__wab_instance", sty.button___9QoWh)}
            color={"navLink"}
            link={`/services`}
            submitsForm={true}
          >
            {"Services"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__xiEmO)}
            color={"navLink"}
            submitsForm={true}
          >
            {"Features"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__jFuUl)}
            color={"navLink"}
            submitsForm={true}
          >
            {"Company"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__ikkv6)}
            color={"navLink"}
            submitsForm={true}
          >
            {"Contact"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button___4SJfx)}
            color={"navLink"}
            submitsForm={true}
          >
            {"Log in"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__fszVg)}
            color={"darkGray"}
            submitsForm={true}
          >
            {"Sign up"}
          </Button>
        </Stack__>
        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__edemD)}>
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button___8CIlM
              )}
            >
              {"Sign up"}
            </button>
            <Button
              className={classNames("__wab_instance", sty.button__iaw1M)}
              submitsForm={true}
            >
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */