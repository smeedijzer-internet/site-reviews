<?php

/**
 * League.Csv (https://csv.thephpleague.com)
 *
 * (c) Ignace Nyamagana Butera <nyamsprod@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace GeminiLabs\League\Csv;

use function count;
use function sprintf;

/**
 * Validates column consistency when inserting records into a CSV document.
 */
class ColumnConsistency
{
    /**
     * The number of column per record.
     *
     * @var int
     */
    protected $columns_count;

    /**
     * New Instance.
     *
     * @return int
     * @throws Exception if the column count is lesser than -1
     */
    public function __construct($columns_count = -1)
    {
        if ($columns_count < -1) {
            throw new Exception(sprintf('%s() expects the column count to be greater or equal to -1 %s given', __METHOD__, $columns_count));
        }

        $this->columns_count = $columns_count;
    }

    /**
     * Returns the column count.
     * 
     * @return int
     */
    public function getColumnCount()
    {
        return $this->columns_count;
    }

    /**
     * Tell whether the submitted record is valid.
     * 
     * @return bool
     */
    public function __invoke(array $record)
    {
        $count = count($record);
        if (-1 === $this->columns_count) {
            $this->columns_count = $count;

            return true;
        }

        return $count === $this->columns_count;
    }
}
