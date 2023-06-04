function Alert({ status, children, ...props }) {
    
    return (
        status &&
        <div
            {...props}
            className={`fixed left-0 right-0 top-0 animate-alert py-2 text-white text-center font-medium`}
        >
            {children}
        </div>
    )
}

export default Alert