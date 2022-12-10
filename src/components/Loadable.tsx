import React, { Suspense } from 'react'
import Loading from './Loading'

const Loadable =
  (Component: React.FC) =>
  // eslint-disable-next-line react/display-name
  (props: any): JSX.Element =>
    (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    )

export default Loadable
