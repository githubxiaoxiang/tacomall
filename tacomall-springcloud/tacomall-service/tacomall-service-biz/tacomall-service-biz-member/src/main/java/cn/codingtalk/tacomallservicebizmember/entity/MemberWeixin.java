/***
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:41
 * @LastEditTime: 2020-06-15 21:45:56
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-springcloud\tacomall-service\tacomall-service-biz\tacomall-service-biz-member\src\main\java\cn\codingtalk\tacomallservicebizmember\entity\MemberWeixin.java
 * @Just do what I think it is right
 */
package cn.codingtalk.tacomallservicebizmember.entity;

import java.util.Date;

import lombok.Data;
import com.baomidou.mybatisplus.annotation.*;

@Data
public class MemberWeixin {

    @TableId(value = "id", type = IdType.AUTO)
    private int id;

    private int memberId;

    private String unionId;

    private String nickname;

    private String avatar;

    private int gender;

    private String mobile;

    private int isDelete;

    private Date createtime;

    private Date updateTime;

    private Date deleteTime;
}
