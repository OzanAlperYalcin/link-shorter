function Alert({ status, children, ...props }) {
    
    return (
        <div
            {...props}
            className={`fixed left-0 right-0 ${!status ? "-top-20" : "top-0"} py-2 text-white text-center font-medium transition-all duration-1000`}
        >
            {children}
        </div>
    )
}

export default Alert