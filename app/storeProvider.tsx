'use client'
import store from '@/components/store/store'
import { Provider } from "react-redux";

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    return <Provider store={ store }> { children } </Provider>
}