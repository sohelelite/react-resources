import { FC, useState } from "react";
import { initialProducts, Product } from "../core/_models";
import { useListView } from "../core/ListViewProvider";
import { useQueryResponse } from "../core/QueryResponseProvider";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { isNotEmpty } from "../../../../_metronic/helpers";
import { createProduct, updateProduct } from "../core/_requests";
import clsx from "clsx";
import { UsersListLoading } from "../../apps/user-management/users-list/components/loading/UsersListLoading";
import { DrawerComponent } from "../../../../_metronic/assets/ts/components";

type Props = {
    isProductLoading: boolean
    product: Product
}

const editUserSchema = Yup.object().shape({
    title: Yup.string()
        .required('Product Name is required'),
    price: Yup.number()
        .required('Price is required'),
    category: Yup.string()
        .required('Category is requried')
})

const ProductForm: FC<Props> = ({ product, isProductLoading }) => {

    const { setItemIdForUpdate } = useListView()
    const { refetch } = useQueryResponse()

    const [productForEdit] = useState<Product>({
        ...product,
        title: product.title || initialProducts.title,
        description: product.description || initialProducts.description,
        price: product.price || initialProducts.price,
        category: product.category || initialProducts.category,
    })

    const cancel = (withRefresh?: boolean) => {
        if (withRefresh) {
            refetch()
        }

        const drawer = DrawerComponent.getInstance('kt_drawer_product')
        drawer?.hide()

        setItemIdForUpdate(undefined)
    }

    const formik = useFormik({
        initialValues: productForEdit,
        validationSchema: editUserSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true)
            try {
                if (isNotEmpty(values.id)) {
                    await updateProduct(values)
                } else {
                    await createProduct(values)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setSubmitting(true)
                cancel()
            }
        }
    })




    return (
        <>
            <div
                id="kt_drawer_product_scroll"
                className='position-relative scroll-y me-n5 pe-5'
                data-kt-scroll='true'
                data-kt-scroll-height='auto'
                data-kt-scroll-wrappers='#kt_drawer_product_body'
                data-kt-scroll-dependencies='#kt_drawer_product_header, #kt_drawer_product_footer'
                data-kt-scroll-offset='5px'
            >
                <form id="product_form" className="form" onSubmit={formik.handleSubmit} noValidate>
                    <div className="d-flex flex-column scroll-y">
                        <div className='fv-row mb-7'>
                            <label className='required fw-bold fs-6 mb-2'>Product Name</label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                {...formik.getFieldProps('title')}
                                name="title"
                                className={clsx(
                                    'form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.title && formik.errors.title },
                                    { 'is-valid': formik.touched.title && formik.errors.title }
                                )}
                                autoComplete="off"
                                disabled={formik.isSubmitting || isProductLoading} />
                            {formik.touched.title && formik.errors.title && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role="alert">{formik.errors.title}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='fv-row mb-7'>
                            <label className='required fw-bold fs-6 mb-2'>Price</label>
                            <input
                                type="number"
                                placeholder="Product Price"
                                {...formik.getFieldProps('price')}
                                name="price"
                                className={clsx(
                                    'form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.price && formik.errors.price },
                                    { 'is-valid': formik.touched.price && formik.errors.price }
                                )}
                                autoComplete="off"
                                disabled={formik.isSubmitting || isProductLoading} />
                            {formik.touched.price && formik.errors.price && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role="alert">{formik.errors.price}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='fv-row mb-7'>
                            <label className='required fw-bold fs-6 mb-2'>Description</label>
                            <textarea
                                placeholder="Product Description"
                                {...formik.getFieldProps('description')}
                                name="description"
                                className={clsx(
                                    'form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.description && formik.errors.description },
                                    { 'is-valid': formik.touched.description && formik.errors.description }
                                )}
                                disabled={formik.isSubmitting || isProductLoading} />
                            {formik.touched.description && formik.errors.description && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role="alert">{formik.errors.description}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='fv-row mb-7'>
                            <label className='required fw-bold fs-6 mb-2'>Category</label>
                            <textarea
                                placeholder="Product Category"
                                {...formik.getFieldProps('category')}
                                name="category"
                                className={clsx(
                                    'form-control form-control-solid mb-3 mb-lg-0',
                                    { 'is-invalid': formik.touched.category && formik.errors.category },
                                    { 'is-valid': formik.touched.category && formik.errors.category }
                                )}
                                disabled={formik.isSubmitting || isProductLoading} />
                            {formik.touched.category && formik.errors.category && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role="alert">{formik.errors.category}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* begin::Actions */}
                    <div className="pt-15">
                        <button
                            type="reset"
                            onClick={() => cancel()}
                            className="btn btn-light me-3"
                            disabled={formik.isSubmitting || isProductLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isProductLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
                        >
                            <span className="indicator-label">Submit</span>
                            {(formik.isSubmitting || isProductLoading) && (
                                <span className='indicator-progress'>
                                    Please wait ..... {' '}
                                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                            )}
                        </button>
                    </div>
                    {/* end::Actions */}
                </form>
            </div>

            {(formik.isSubmitting || isProductLoading) && <UsersListLoading />}
        </>
    )
}

export { ProductForm }