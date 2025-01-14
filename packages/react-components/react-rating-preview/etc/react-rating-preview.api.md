## API Report File for "@fluentui/react-rating-preview"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const Rating: ForwardRefComponent<RatingProps>;

// @public (undocumented)
export const ratingClassNames: SlotClassNames<RatingSlots>;

// @public (undocumented)
export type RatingContextValue = Pick<RatingState, 'color' | 'iconFilled' | 'iconOutline' | 'mode' | 'name' | 'step' | 'size' | 'value' | 'hoveredValue'>;

// @public (undocumented)
export type RatingContextValues = {
    rating: RatingContextValue;
};

// @public
export const RatingDisplay: ForwardRefComponent<RatingDisplayProps>;

// @public (undocumented)
export const ratingDisplayClassNames: SlotClassNames<RatingDisplaySlots>;

// @public
export type RatingDisplayProps = ComponentProps<RatingDisplaySlots> & {};

// @public (undocumented)
export type RatingDisplaySlots = {
    root: Slot<'div'>;
};

// @public
export type RatingDisplayState = ComponentState<RatingDisplaySlots>;

// @public
export const RatingItem: ForwardRefComponent<RatingItemProps>;

// @public (undocumented)
export const ratingItemClassNames: SlotClassNames<RatingItemSlots>;

// @public
export type RatingItemProps = ComponentProps<Partial<RatingItemSlots>> & {
    value?: number;
};

// @public (undocumented)
export type RatingItemSlots = {
    root: NonNullable<Slot<'span'>>;
    selectedIcon?: NonNullable<Slot<'div'>>;
    unselectedFilledIcon?: NonNullable<Slot<'div'>>;
    unselectedOutlineIcon?: NonNullable<Slot<'div'>>;
    halfValueInput?: NonNullable<Slot<'input'>>;
    fullValueInput?: NonNullable<Slot<'input'>>;
};

// @public
export type RatingItemState = ComponentState<RatingItemSlots> & Required<Pick<RatingItemProps, 'value'>> & Pick<RatingState, 'color' | 'mode' | 'step' | 'size'> & {
    iconFillWidth: number;
};

// @public
export type RatingOnChangeData = {
    value?: number;
};

// @public
export type RatingProps = ComponentProps<RatingSlots> & {
    color?: 'brand' | 'marigold' | 'neutral';
    defaultValue?: number;
    iconFilled?: React_2.ReactElement;
    iconOutline?: React_2.ReactElement;
    max?: number;
    mode?: 'interactive' | 'read-only' | 'read-only-compact';
    name?: string;
    onChange?: (ev: React_2.SyntheticEvent | Event, data: RatingOnChangeData) => void;
    step?: 0.5 | 1;
    size?: 'small' | 'medium' | 'large' | 'extra-large';
    value?: number;
};

// @public (undocumented)
export const RatingProvider: React_2.Provider<RatingContextValue | undefined>;

// @public (undocumented)
export type RatingSlots = {
    root: NonNullable<Slot<'div'>>;
    ratingLabel?: NonNullable<Slot<'label'>>;
    ratingCountLabel?: NonNullable<Slot<'label'>>;
};

// @public
export type RatingState = ComponentState<RatingSlots> & Required<Pick<RatingProps, 'color' | 'iconFilled' | 'iconOutline' | 'mode' | 'name' | 'step' | 'size' | 'value'>> & {
    hoveredValue?: number | undefined;
};

// @public
export const renderRating_unstable: (state: RatingState, contextValues: RatingContextValues) => JSX.Element;

// @public
export const renderRatingDisplay_unstable: (state: RatingDisplayState) => JSX.Element;

// @public
export const renderRatingItem_unstable: (state: RatingItemState) => JSX.Element;

// @public
export const useRating_unstable: (props: RatingProps, ref: React_2.Ref<HTMLDivElement>) => RatingState;

// @public
export const useRatingContextValue_unstable: () => RatingContextValue | undefined;

// @public (undocumented)
export const useRatingContextValues: (state: RatingState) => RatingContextValues;

// @public
export const useRatingDisplay_unstable: (props: RatingDisplayProps, ref: React_2.Ref<HTMLDivElement>) => RatingDisplayState;

// @public
export const useRatingDisplayStyles_unstable: (state: RatingDisplayState) => RatingDisplayState;

// @public
export const useRatingItem_unstable: (props: RatingItemProps, ref: React_2.Ref<HTMLSpanElement>) => RatingItemState;

// @public
export const useRatingItemStyles_unstable: (state: RatingItemState) => RatingItemState;

// @public
export const useRatingStyles_unstable: (state: RatingState) => RatingState;

// (No @packageDocumentation comment for this package)

```
