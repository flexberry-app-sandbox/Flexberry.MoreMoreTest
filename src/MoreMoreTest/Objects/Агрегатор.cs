//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.MoreMoreTest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Агрегатор.
    /// </summary>
    //  *** Start programmer edit section *** (Агрегатор CustomAttributes)

    //  *** End programmer edit section *** (Агрегатор CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АгрегаторE", new string[] {
            "А as \'А\'",
            "МастерАгрегат"})]
    [AssociatedDetailViewAttribute("АгрегаторE", "Детейл1", "Детейл1E", true, "", "Детейл1", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("АгрегаторE", "МастерАгрегат", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "А")]
    [View("АгрегаторL", new string[] {
            "А as \'А\'",
            "МастерАгрегат.А as \'МастерА\'"})]
    public class Агрегатор : ICSSoft.STORMNET.DataObject
    {
        
        private string fА;
        
        private IIS.MoreMoreTest.МастерАгрегат fМастерАгрегат;
        
        private IIS.MoreMoreTest.DetailArrayOfДетейл1 fДетейл1;
        
        //  *** Start programmer edit section *** (Агрегатор CustomMembers)

        //  *** End programmer edit section *** (Агрегатор CustomMembers)

        
        /// <summary>
        /// А.
        /// </summary>
        //  *** Start programmer edit section *** (Агрегатор.А CustomAttributes)

        //  *** End programmer edit section *** (Агрегатор.А CustomAttributes)
        [StrLen(255)]
        public virtual string А
        {
            get
            {
                //  *** Start programmer edit section *** (Агрегатор.А Get start)

                //  *** End programmer edit section *** (Агрегатор.А Get start)
                string result = this.fА;
                //  *** Start programmer edit section *** (Агрегатор.А Get end)

                //  *** End programmer edit section *** (Агрегатор.А Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Агрегатор.А Set start)

                //  *** End programmer edit section *** (Агрегатор.А Set start)
                this.fА = value;
                //  *** Start programmer edit section *** (Агрегатор.А Set end)

                //  *** End programmer edit section *** (Агрегатор.А Set end)
            }
        }
        
        /// <summary>
        /// Агрегатор.
        /// </summary>
        //  *** Start programmer edit section *** (Агрегатор.МастерАгрегат CustomAttributes)

        //  *** End programmer edit section *** (Агрегатор.МастерАгрегат CustomAttributes)
        [NotNull()]
        public virtual IIS.MoreMoreTest.МастерАгрегат МастерАгрегат
        {
            get
            {
                //  *** Start programmer edit section *** (Агрегатор.МастерАгрегат Get start)

                //  *** End programmer edit section *** (Агрегатор.МастерАгрегат Get start)
                IIS.MoreMoreTest.МастерАгрегат result = this.fМастерАгрегат;
                //  *** Start programmer edit section *** (Агрегатор.МастерАгрегат Get end)

                //  *** End programmer edit section *** (Агрегатор.МастерАгрегат Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Агрегатор.МастерАгрегат Set start)

                //  *** End programmer edit section *** (Агрегатор.МастерАгрегат Set start)
                this.fМастерАгрегат = value;
                //  *** Start programmer edit section *** (Агрегатор.МастерАгрегат Set end)

                //  *** End programmer edit section *** (Агрегатор.МастерАгрегат Set end)
            }
        }
        
        /// <summary>
        /// Агрегатор.
        /// </summary>
        //  *** Start programmer edit section *** (Агрегатор.Детейл1 CustomAttributes)

        //  *** End programmer edit section *** (Агрегатор.Детейл1 CustomAttributes)
        public virtual IIS.MoreMoreTest.DetailArrayOfДетейл1 Детейл1
        {
            get
            {
                //  *** Start programmer edit section *** (Агрегатор.Детейл1 Get start)

                //  *** End programmer edit section *** (Агрегатор.Детейл1 Get start)
                if ((this.fДетейл1 == null))
                {
                    this.fДетейл1 = new IIS.MoreMoreTest.DetailArrayOfДетейл1(this);
                }
                IIS.MoreMoreTest.DetailArrayOfДетейл1 result = this.fДетейл1;
                //  *** Start programmer edit section *** (Агрегатор.Детейл1 Get end)

                //  *** End programmer edit section *** (Агрегатор.Детейл1 Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Агрегатор.Детейл1 Set start)

                //  *** End programmer edit section *** (Агрегатор.Детейл1 Set start)
                this.fДетейл1 = value;
                //  *** Start programmer edit section *** (Агрегатор.Детейл1 Set end)

                //  *** End programmer edit section *** (Агрегатор.Детейл1 Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АгрегаторE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АгрегаторE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АгрегаторE", typeof(IIS.MoreMoreTest.Агрегатор));
                }
            }
            
            /// <summary>
            /// "АгрегаторL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АгрегаторL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АгрегаторL", typeof(IIS.MoreMoreTest.Агрегатор));
                }
            }
        }
    }
}
