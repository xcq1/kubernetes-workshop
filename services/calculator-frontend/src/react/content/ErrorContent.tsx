import React from 'react';
import { BaseLayout } from '../layout/BaseLayout';
import { reactRender } from '../../utils/reactRender';

export interface Props {
  error: string;
}

const ErrorContent: React.FunctionComponent<Props> = props => (
  <BaseLayout>
    <div className="alert alert-danger">
      Oops, something went wrong!
      <br />
      <code>{JSON.stringify(props.error)}</code>
    </div>
  </BaseLayout>
);

export const renderError = (props: Props) => reactRender(ErrorContent, props);
