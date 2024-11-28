// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2GgHvNkZGeWD3TYfD2fCA
// Component: QrEvJ0umU1-4

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { CartComponent } from "@plasmicpkgs/commerce";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_9_imported_dep_4/plasmic.module.css"; // plasmic-import: rJmrvZ8rTbZpYCx9aXq6iH/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2GgHvNkZGeWD3TYfD2fCA/projectcss
import sty from "./PlasmicCart.module.css"; // plasmic-import: QrEvJ0umU1-4/css

import ShoppingBag3049SvgIcon from "./icons/PlasmicIcon__ShoppingBag3049Svg"; // plasmic-import: XkeyEzCFPe9L/icon

createPlasmicElementProxy;

export type PlasmicCart__VariantMembers = {
  designOnly: "designOnly";
};
export type PlasmicCart__VariantsArgs = {
  designOnly?: SingleBooleanChoiceArg<"designOnly">;
};
type VariantPropType = keyof PlasmicCart__VariantsArgs;
export const PlasmicCart__VariantProps = new Array<VariantPropType>(
  "designOnly"
);

export type PlasmicCart__ArgsType = {};
type ArgPropType = keyof PlasmicCart__ArgsType;
export const PlasmicCart__ArgProps = new Array<ArgPropType>();

export type PlasmicCart__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  cart?: Flex__<typeof CartComponent>;
};

export interface DefaultCartProps {
  designOnly?: SingleBooleanChoiceArg<"designOnly">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCart__RenderFunc(props: {
  variants: PlasmicCart__VariantsArgs;
  args: PlasmicCart__ArgsType;
  overrides: PlasmicCart__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "designOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.designOnly
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <ShoppingBag3049SvgIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgdesignOnly]: hasVariant($state, "designOnly", "designOnly")
        })}
        role={"img"}
      />

      <CartComponent
        data-plasmic-name={"cart"}
        data-plasmic-override={overrides.cart}
        className={classNames("__wab_instance", sty.cart, {
          [sty.cartdesignOnly]: hasVariant($state, "designOnly", "designOnly")
        })}
        field={"Size"}
        hideIfIsEmpty={
          hasVariant($state, "designOnly", "designOnly") ? false : true
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "cart"],
  svg: ["svg"],
  cart: ["cart"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  cart: typeof CartComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCart__VariantsArgs;
    args?: PlasmicCart__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCart__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCart__ArgProps,
          internalVariantPropNames: PlasmicCart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCart";
  } else {
    func.displayName = `PlasmicCart.${nodeName}`;
  }
  return func;
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    cart: makeNodeComponent("cart"),

    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps
  }
);

export default PlasmicCart;
/* prettier-ignore-end */
