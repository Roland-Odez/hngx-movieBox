'use client'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (

        <div>Modal</div>
    )
}

export default Modal