import LoadingFullScreen from '@app/components/LoadingFullScreen';
import { LoadingContext } from '@app/contexts/LoadingContext';
import React, { useState } from 'react';
type Props = {
    children: React.ReactNode
}
export function LoadingProvider(props: Props) {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider
            value={{
                loading: loading,
                show: () => setLoading(true),
                hide: () => setLoading(false)
            }}>
            {loading && <LoadingFullScreen />}
            {props.children}
        </LoadingContext.Provider>
    );
}

