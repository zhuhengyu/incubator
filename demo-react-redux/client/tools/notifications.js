/**
 * Created by 欧阳 超 on 2017/02/13
 */

import swal from 'sweetalert2';

export const success = () => {
  swal({
    type: 'success',
    title: 'Success',
    width: '300px',
  });
};

export const error = () => {
  swal({
    type: 'error',
    title: 'failed',
    width: '300px',
  });
};

export const confirmDelete = () => {};