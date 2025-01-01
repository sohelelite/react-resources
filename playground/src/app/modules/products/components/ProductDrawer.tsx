import { KTIcon } from "../../../../_metronic/helpers";
import { ProductFormWrapper } from "./ProductFormWrapper";

const ProductDrawer = () => {
    return (
        <div
            id='kt_drawer_product'
            className='bg-body'
            data-kt-drawer='true'
            data-kt-drawer-name='product'
            data-kt-drawer-activate='true'
            data-kt-drawer-overlay='true'
            data-kt-drawer-width="{default:'300px', 'md': '500px'}"
            data-kt-drawer-direction='end'
            data-kt-drawer-toggle='#kt_drawer_product_toggle'
            data-kt-drawer-close='#kt_drawer_product_close'
        >

            <div className='card shadow-none rounded-0 w-100'>
                <div className='card-header' id='kt_drawer_product_header'>
                    <h3 className='card-title fw-bolder text-gray-900'>Products</h3>
                    <div className='card-toolbar'>
                        <div className='btn btn-sm btn-icon btn-active-light-primary me-n5' id='kt_drawer_product_close'>
                            <KTIcon iconName='cross' className='fs-1' />
                        </div>
                    </div>
                </div>
                <div className='card-body position-relative' id='kt_drawer_product_body'>
                    <ProductFormWrapper />
                </div>
            </div>

        </div>
    )
}

export { ProductDrawer }