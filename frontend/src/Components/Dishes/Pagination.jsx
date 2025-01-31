import React from 'react';

const Pagination = ({
    currentPage,
    totalPages,
    onPrev,
    onNext,
    disablePrev,
    disableNext
}) => {
    return (
        // <div className="pagination">
        //     <div className="pagination-controls">
        //         <button
        //             onClick={onPrev}
        //             disabled={disablePrev}
        //             aria-label="Previous page"
        //             className="pagination-button"
        //         >
        //             &laquo; Previous
        //         </button>

        //         <span className="page-info">
        //             Page {currentPage} of {totalPages}
        //         </span>

        //         <button
        //             onClick={onNext}
        //             disabled={disableNext}
        //             aria-label="Next page"
        //             className="pagination-button"
        //         >
        //             Next &raquo;
        //         </button>
        //     </div>
        // </div>
        <div className="pagination">
            <button onClick={onPrev} disabled={disablePrev}>
                &laquo; Previous
            </button>
            <span className="page-info">
                Page {currentPage} of {totalPages}
            </span>
            <button onClick={onNext} disabled={disableNext}>
                Next &raquo;
            </button>
        </div>
    );
};


export default Pagination;